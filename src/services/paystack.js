// Dummy Paystack service for testing
const DUMMY_PAYSTACK_PUBLIC_KEY = "pk_test_dummy_key_123456789";

// Mock payment verification response
const mockVerifyPayment = (reference) => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve({
        status: true,
        message: "Payment verified successfully",
        data: {
          reference,
          status: "success",
          amount: 5000, // 50.00 in kobo
          currency: "NGN",
          channel: "card",
          paid_at: new Date().toISOString(),
          customer: {
            email: "test@example.com",
            first_name: "Test",
            last_name: "User",
          },
        },
      });
    }, 1000);
  });
};

// Mock initialize payment
const initializePayment = (email, amount, callback) => {
  // Simulate opening Paystack payment modal
  console.log(`Initializing payment for ${email} with amount ${amount}`);

  // Simulate successful payment after 2 seconds
  setTimeout(() => {
    const reference = `ref_${Date.now()}`;
    callback({
      reference,
      trans: reference,
      status: "success",
      message: "Payment successful",
    });
  }, 2000);
};

export { DUMMY_PAYSTACK_PUBLIC_KEY, initializePayment, mockVerifyPayment };
