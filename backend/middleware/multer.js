import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = '';

    // Determine folder based on upload type
    if (req.body.type === 'avatar') {
      folder = 'user_avatar';
    } else if (req.body.type === 'product') {
      const userId = req.body.userId || 'unknown_user';
      folder = `${userId}/products`;
    } else if (req.body.type === 'category') {
      folder = 'category';
    } else if (req.body.type === 'subcategory') {
      folder = 'subcategory';
    } else {
      folder = 'others';
    }

    const dir = path.join(__dirname, `../assets/images/${folder}`);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;