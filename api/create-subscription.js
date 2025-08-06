export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { cardNumber, expireDate, cvc, amount } = req.body;

  try {
    // BURAYA IYZICO API KEYLERİNİ EKLEYECEKSİN
    const apiKey = "IYZICO_API_KEY";
    const secretKey = "IYZICO_SECRET_KEY";

    // Burada normalde Iyzico API çağrısı yapılacak
    // Şimdilik test response dönüyoruz
    return res.status(200).json({
      success: true,
      message: "Iyzico ödeme başarıyla simüle edildi",
      data: { cardNumber, expireDate, cvc, amount }
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
