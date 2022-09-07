import axios from "axios";

export async function load({ params }) {
    return (await axios.get(`https://backapi.bius.kim/${params.student_id}/info`)).data.data
}