import {ref} from "vue";
import axios from 'axios'
import {useRouter} from "vue-router";

axios.defaults.baseURL = 'http://localhost:8080'

export default function eventCRUD() {

    const events = ref([]);
    const event = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getEvents = async () => {
        const response = await axios.get("/events");
        events.value = response.data.body;
    }
    const getEvent = async (id) => {
        const response = await axios.get("/event/" + id);
        event.value = response.data.body;
    }

    const storeEvent = async (data) => {
        try {
            await axios.post("/event", data);
            await router.push({name: "home"})
        } catch (error) {
            errors.value = error;
        }
    }

    const editEvent = async (id) => {
        try {
            await axios.put("/event/" + id, event.value);
            await router.push({name: "home"})
        } catch (error) {
            errors.value = error;
        }
    }

    const deleteEvent = async (id) => {
        try {
            if (!window.confirm("Are you sure?")) {
                return;
            }
            await axios.delete("/event/" + id);
            await getEvents();
        } catch (error) {
            errors.value = error;
        }
    }

    return {
        event,
        events,
        getEvents,
        getEvent,
        storeEvent,
        editEvent,
        deleteEvent,
        errors,
    };
};