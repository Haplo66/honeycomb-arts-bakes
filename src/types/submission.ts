export type SubmissionResult =
  | {
      success: true;
      message?: string;
      orderId?: string;
    }
  | {
      success: false;
      error?: string;
    };
