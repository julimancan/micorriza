"use server";

export const emailSubmitHandler = async (info: {
  name: string;
  email: string;
}) => {
  try {
    const response = await fetch(`${process.env.URL}/api/submit-email`, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
