export default async function handler(req, res) {
  const host = req.headers.host;

  const frame = {
    frames: [
      {
        version: "vNext",
        title: "🎁 ClaimX – Tap to Win!",
        image: `https://${host}/banner.jpg`,
        buttons: [
          {
            label: "🎯 Tap to Claim",
            action: "post",
            target: `https://${host}/api/claim`
          }
        ],
        post_url: `https://${host}/api/claim`
      }
    ]
  };

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(frame);
}

