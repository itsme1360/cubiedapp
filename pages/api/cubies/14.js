// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #14",
    "rarity": "Unique",
    "power" : "1.5",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreigihop6mkleejoy7lozsr7rtnlcmh22lvzrrjtnw3zfd6layu24ga"
  })
}
