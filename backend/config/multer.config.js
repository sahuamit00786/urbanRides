import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/upload');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    const fileExtension = path.extname(file.originalname);
    const fileName = file.originalname.substring(0, 4);
    cb(null, `${fileName}-${uniqueSuffix}${fileExtension}`);
  },
});

// export const upload = multer({
//   storage: storage,
//   limits: { fileSize: Infinity },
// }).array('bikeImage', 10);

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB file size limit
  fileFilter: function (req, file, cb) {
    // Only allow certain file types, if needed (optional)
    const filetypes = /jpeg|jpg|png|pdf/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase(),
    );

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images and PDFs are allowed!'));
    }
  },
}).fields([
  { name: 'bikeImage', maxCount: 10 },
  { name: 'pollution', maxCount: 1 },
  { name: 'insurance', maxCount: 1 },
]);
