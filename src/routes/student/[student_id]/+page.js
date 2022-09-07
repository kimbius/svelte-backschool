/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    return await fetch(`https://backapi.bius.kim/${params.student_id}/info`).then(res => res.json()).then(res => res.data)
}