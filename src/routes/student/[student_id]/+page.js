import axios from "axios";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    return (await axios.get(`https://backapi.bius.kim/${params.student_id}/info`)).data.data
}