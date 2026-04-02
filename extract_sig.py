import cv2
import numpy as np
import sys

def image_to_svg(image_path, svg_path):
    # Load image in grayscale
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        print(f"Error loading {image_path}")
        return
    
    # Threshold: dark ink becomes white (255), light paper becomes black (0)
    # The image might have varied lighting, so use adaptive thresholding
    thresh = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, 
                                   cv2.THRESH_BINARY_INV, 21, 10)
    
    # Optional: morphological operations to clean up noise
    kernel = np.ones((2,2), np.uint8)
    thresh = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel)
    
    # Find contours
    contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    
    # Start building SVG
    height, width = img.shape
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="100%" height="100%">\n'
    svg += '<g fill="#00d2ff">\n' # Default signature color
    
    for cnt in contours:
        # Ignore extremely small noise 
        if cv2.contourArea(cnt) < 5:
            continue
            
        svg += '<path d="'
        for i, point in enumerate(cnt):
            x, y = point[0]
            cmd = 'M' if i == 0 else 'L'
            svg += f'{cmd}{x} {y} '
        svg += 'Z" />\n'
    
    svg += '</g>\n</svg>'
    
    with open(svg_path, 'w') as f:
        f.write(svg)
    print(f"Successfully created {svg_path}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python extract_sig.py input.png output.svg")
    else:
        image_to_svg(sys.argv[1], sys.argv[2])
