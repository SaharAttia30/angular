import sys

def process_image(image_path):
    # load image and perform processing/prediction
    result = 'something' + image_path

    # print result to stdout
    print(result)
    sys.stdout.flush()

if __name__ == '__main__':
    image_path = sys.argv[1]
    process_image(image_path)