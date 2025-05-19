import path from 'path';

const uploadImageController = async (request, response) => {
  try {
    const file = request.file;

    if (!file) {
      return response.status(400).json({
        message: 'No file uploaded',
        success: false,
      });
    }

    // Construct local file path
    const userId = request.body.iserId || 'unknown_user';
    const imagePath = path.join(`${process.env.RESEND_API}/assets/images/${userId}/products/${file.filename}`);

    return response.json({
      message: 'Image uploaded successfully',
      success: true,
      data: { imagePath },
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || 'Error uploading image',
      success: false,
    });
  }
};

export default uploadImageController;
