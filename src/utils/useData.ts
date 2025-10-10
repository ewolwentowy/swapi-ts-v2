import {onMounted, ref} from "vue";


export function useFetch<T>(url: string) {
    const data = ref<T | null>(null)
    const error = ref<string | null>(null)
    const loading = ref(true)

    async function getData() {
        data.value = null;
        error.value = null;
        loading.value = true;

        try {
            const controller = new AbortController();
            const timeoutSignal = AbortSignal.timeout(5000);
            const response = await fetch(url, {
                signal: AbortSignal.any([controller.signal, timeoutSignal]),
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            data.value = await response.json() as T;
        } catch (err: unknown) {
            if (err instanceof Error) {
                if (err.name === "AbortError") {
                } else if (err.name === "TimeoutError") {
                }
                error.value = `Error: ${err.message}`;
            } else {
                error.value = "Unknown error";
            }
        } finally {
            loading.value = false;
        }
    }

    onMounted(getData);

    return {
        data, error, loading
    }
}







