from PIL import Image

def remove_background(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # We will do a flood fill from the top-left corner.
    # The top-left corner is black in the user's screenshot.
    # Actually, replacing all near-black pixels might be safer 
    # but we don't want to replace black inside the logo if any.
    # But the logo is inside a white circle.
    
    data = img.getdata()
    new_data = []
    
    for item in data:
        # Check if the pixel is near-black
        if item[0] < 30 and item[1] < 30 and item[2] < 30:
            new_data.append((255, 255, 255, 0)) # Transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_background('src/assets/logo.png', 'src/assets/logo.png')
    print("Background removed successfully")
