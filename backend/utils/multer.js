const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
module.exports = {
    dest: path.resolve(__dirname, '..','imgs'),
    storage: multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, path.resolve(__dirname, '..','imgs'))
        },
        filename: (req, file, cb)=>{
            crypto.randomBytes(16, (err, hash)=>{
                if (err) cb(err);

                const fileName = `${hash.toString('hex')}-${String(file.originalname).replace(/\s/g,'-')}`;
                cb(null, fileName)
            })
        }
    }),
    limits:{
        fileSize: 3 * 1024 * 1024
    },
    fileFilter: (req, file, cb)=>{
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/jpg'
        ]

        if(allowedMimes.includes(file.mimetype)){
            cb(null, true);
        }else {
            cb(new Error('Ivalid file type'))
        }
    }
    


}