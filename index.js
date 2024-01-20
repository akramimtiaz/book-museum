import fetch from 'node-fetch';

const handler = async (event) => {
    const { buyer_id, museum_name, when } = event;

    // museum's booking process
    const response = await fetch(
        `${process.env.WEBSERVICE_URL}/Prod/museum`,
        {
            method: 'POST',
            body: JSON.stringify({
                buyer_id,
                museum_name,
                when,
            }),
        },
    );

    const data = await response.json();
    return data;
};

export { handler };