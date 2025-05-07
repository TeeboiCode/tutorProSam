import { loadScript } from "@paypal/paypal-js";

import axios from "axios";

let paypal;

/**
 * Initialize PayPal SDK with your credentials
 * This loads the PayPal JavaScript SDK into your page
 */
export const initializePayPal = async () => {
  try {
    // Load PayPal SDK with configuration
    paypal = await loadScript({
      "client-id":
        import.meta
          .AWalYOeJqo2n3kSsA3PLze_tMiMcKuxEGuaBCBvQMmInN_ENUozPADbBiJ_s0ffjPgN1eR4ZnpocFXZ4 ||
        "test", // Use test client ID if not set
      currency: "USD", // Default currency
      intent: "capture", // Payment intent (capture or authorize)
      "enable-funding": "paylater,venmo", // Additional payment methods
    });
    return paypal; // Return the loaded PayPal SDK
  } catch (error) {
    console.error("Failed to load PayPal SDK:", error);
    throw error;
  }
};

/**
 * Create a PayPal order through your backend
 * This sends a request to your server to create a PayPal order
 */
export const createOrder = async (amount) => {
  try {
    // Send request to your backend API using axios
    const response = await axios.post("/api/payments/create-order", {
      amount: amount.toString(), // Convert amount to string as required by PayPal
      currency: "USD", // Currency code
      description: "Student Registration Fee", // Order description
    });

    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

/**
 * Capture the payment after user approval
 * This confirms the payment with PayPal
 */
export const capturePayment = async (orderId, userData) => {
  try {
    const response = await axios.post("/api/payments/capture-payment", {
      orderId: orderId,
      userData: userData,
    });

    return response.data;
  } catch (error) {
    console.error("Error capturing payment:", error);
    throw error;
  }
};

/**
 * Render the PayPal button on your page
 * This creates and displays the PayPal button with your configuration
 */
export const renderPayPalButton = async (
  containerId,
  amount,
  onSuccess,
  userData
) => {
  try {
    // Wait for the container to exist with a retry mechanism
    let container = document.getElementById(containerId);
    let retries = 0;
    const maxRetries = 5;
    const retryDelay = 500; // 500ms between retries

    while (!container && retries < maxRetries) {
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
      container = document.getElementById(containerId);
      retries++;
    }

    if (!container) {
      console.error(
        `Container with id ${containerId} not found after ${maxRetries} retries`
      );
      return;
    }

    // Initialize PayPal if not already done
    if (!paypal) {
      await initializePayPal();
    }

    // Clear any existing buttons
    container.innerHTML = "";

    paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "blue",
          layout: "vertical",
          label: "pay",
        },
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(),
                  currency_code: "USD",
                },
              },
            ],
            application_context: {
              shipping_preference: "NO_SHIPPING",
              user_action: "PAY_NOW",
            },
          });
        },
        onApprove: async function (data, actions) {
          try {
            // First, let PayPal capture the payment on their side
            const details = await actions.order.capture();

            // Then manually call our onSuccess callback with the details
            onSuccess(details);

            return details;
          } catch (error) {
            console.error("Error in PayPal payment capture:", error);
            throw error;
          }
        },
        onError: function (err) {
          console.error("PayPal error:", err);
        },
      })
      .render(`#${containerId}`);
  } catch (error) {
    console.error("Error rendering PayPal button:", error);
    throw error;
  }
};
