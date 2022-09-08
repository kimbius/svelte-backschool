<script>
    export let data;
</script>

<div class="container">
    <div class="flex flex-col justify-center items-center min-h-screen gap-5">
        <div class="max-w-xl w-full">
            <div
                class="w-full bg-white rounded-lg ring-1 ring-gray-200 p-3 flex flex-col gap-3"
            >
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2 group py-1">
                        <div
                            class="rounded-full bg-gray-200 h-[35px] w-[35px]"
                        />
                        <div>
                            <h1
                                class="group-hover:text-gray-600 font-bold transition"
                            >
                                {data.full_name}
                            </h1>
                            <p class="text-gray-500 text-xs">{data.class}</p>
                        </div>
                    </div>
                    <div
                        class="text-center bg-green-400 rounded-full py-2 px-4 text-white"
                    >
                        <p class="text-sm">GPA {data.gpa}</p>
                    </div>
                </div>

                <div class="overflow-x-auto min-w-full">
                    <table class="w-full border-collapse border border-slate-500 ">
                        <thead>
                            <tr class="text-xs text-gray-500">
                                <th>วิชา</th>
                                <th>เกรด</th>
                                <th>กลาง / ปลาย</th>
                                <th>รวม</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each data.subjects as Item}
                                <tr
                                    class="text-xs"
                                    class:text-red-400={Item.score.total < 50 &&
                                        Item.grade != ""}
                                    class:text-yellow-600={Item.score.total <
                                        50 && Item.grade == ""}
                                >
                                    <td>
                                        <div class="flex flex-col">
                                            <span class="font-bold text-sm"
                                                >{Item.name}</span
                                            >
                                            <span class="text-gray-500 text-xs">
                                                {Item.code} - {Item.unit} หน่วยกิต
                                            </span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        {Item.grade == ""
                                            ? "ยังไม่มีการสรุป"
                                            : Item.grade}
                                    </td>
                                    <td class="text-center"
                                        >{Item.score.mid_term.total} / {Item
                                            .score.final_term.total}</td
                                    >
                                    <td class="text-center"
                                        >{Item.score.total}</td
                                    >
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="flex flex-col gap-1">
                        <h1 class="text-xs font-bold text-gray-500">
                            ความหมายของสีต่างๆบนตัวหนังสือ?
                        </h1>
                        <div class="flex flex-col gap-2 text-xs">
                            <div class="flex gap-2">
                                <div
                                    class="rounded-full bg-black h-[15px] w-[15px]"
                                />
                                <p>สถานการณ์ปกติ</p>
                            </div>
                            <div class="flex gap-2">
                                <div
                                    class="rounded-full bg-yellow-600 h-[15px] w-[15px]"
                                />
                                <p>
                                    ยังไม่มีการสรุปเกรดแต่คุณต้องระวัง
                                    เกรดคุณอาจจะไม่ดี
                                </p>
                            </div>
                            <div class="flex gap-2">
                                <div
                                    class="rounded-full bg-red-400 h-[15px] w-[15px]"
                                />
                                <p>
                                    มัวรออะไรอยู่ล่ะ
                                    รีบไปติดต่อคุณครูผู้สอนเดี๋ยวนี้เลย!
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href="/" class="text-xs text-blue-600"
                        >ต้องการตรวจสอบเพิ่มเติม?</a
                    >
                </div>
            </div>
        </div>
        <footer>
            <p class="text-xs text-gray-300">&copy; 2022 bius.kim</p>
        </footer>
    </div>
</div>
