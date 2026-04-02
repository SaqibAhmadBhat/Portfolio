from PIL import Image

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    data = img.getdata()

    new_data = []
    for item in data:
        # Check if the pixel is near-white
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            # Change near-white pixels to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

remove_white_bg("brand-bot.png", "brand-bot-trans.png")
