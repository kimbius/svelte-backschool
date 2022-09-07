<script>
    let submitBusy = false;
    let items = [];
    let step = 1

    import axios from "axios";
    const onSubmit = async (e) => {
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        submitBusy = true;
        try {
            const response = await axios.post(
                "https://backapi.bius.kim/search",
                data
            );
            step = 2
            items = response.data.data;
        } catch (error) {}
        submitBusy = false;
    };
</script>

<div class="container">
    <div class="flex flex-col justify-center items-center min-h-screen gap-5">
        <div class="max-w-md w-full">
            <div
                class="w-full bg-white rounded-lg ring-1 ring-gray-200 p-3 flex flex-col gap-4"
            >
                {#if step == 2}
                    <div class="flex items-center gap-3">
                        <button
                            on:click={() => {
                                step = 1;
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-chevron-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                />
                            </svg>
                        </button>
                        <h1 class="text-sm text-gray-500">
                            พบการค้นหาทั้งหมด {items.length} รายการ
                        </h1>
                    </div>
                    <div class="flex flex-col">
                        {#if items.length <= 0}
                            <p class="text-xs text-gray-500 text-center py-16">ไม่พบใครสักคนที่นี่</p>
                        {/if}
                        {#each items as Item}
                            <a class="flex gap-2 group py-1" href={`/student/${Item._id}`}>
                                <div
                                    class="rounded-full bg-gray-200 h-[35px] w-[35px]"
                                />
                                <div>
                                    <h1 class="group-hover:text-gray-600 font-bold transition">{Item.full_name}</h1>
                                    <p class="text-gray-500 text-xs">{Item.class}</p>
                                </div>
                            </a>
                        {/each}
                    </div>
                {:else}
                    <form
                        on:submit|preventDefault={onSubmit}
                        class="grid gap-2"
                    >
                        <div>
                            <h2 class="text-sm text-gray-500">
                                เช็คเกรดก่อนใคร <span class="text-transparent text-xs bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">สำหรับนักเรียนโรงเรียนบึงกาฬ</span>
                            </h2>
                            <h1 class="text-base font-bold">
                                แบ็คสคูล - ระบบเช็คเกรดส่งตรงจาก toSchool.in
                            </h1>
                        </div>
                        <input
                            disabled={submitBusy}
                            name="query"
                            type="text"
                            class="disabled:opacity-50 transition p-2 bg-gray-100 rounded"
                            placeholder="กรอกชื่อหรือนามสกุลของคุณ"
                            required
                        />
                        <button
                            disabled={submitBusy}
                            type="submit"
                            class="disabled:opacity-50 transition p-2 text-white bg-gradient-to-b from-blue-300 to-blue-400 rounded flex gap-2 items-center justify-center"
                        >
                            {#if !submitBusy}
                                <svg
                                    class="fill-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                                    />
                                </svg>
                                ตรวจสอบ
                            {:else}
                                <svg
                                    class="animate-spin"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                                    />
                                </svg>
                            {/if}
                        </button>
                    </form>
                {/if}
            </div>
        </div>
        <footer>
            <p class="text-xs text-gray-300">&copy; 2022 bius.kim</p>
        </footer>
    </div>
</div>
