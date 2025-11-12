export async function handler(event) {
    const data = JSON.parse(event.body);

    const repsonse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            acess_key: process.env.WEB3FORMS_KEY,
            name: data.name,
            email: data.email,
            message: data.message,
        }),
    });

    const result = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
}