export default async function handler(req, res) {
  const host = req.headers.host;

  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    frames: [
      {
        version: "vNext",
        title: "🎁 ClaimX – Tap to Win!",
        image: `https://${host}/banner.jpg`,
        buttons: [
          { label: "Tap to Claim 🎯", action: "post", target: `https://redalerts-projects-cryptox-virid.vercel.app//api/claim` },
        ],
        postUrl: `https://redalerts-projects-cryptox-virid.vercel.app/api/claim`,
      },
    ],
  });
}
