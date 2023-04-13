import {ref} from "vue";
import axios from 'axios'
import {useRouter} from "vue-router";
import moment from "moment";

axios.defaults.baseURL = 'http://localhost:8080'

export default function eventCRUD() {

    const events = ref([]);
    const event = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getEvents = async () => {
        const response = await axios.get("/events");
        let eventsBody = response.data.body;
        for ( let i = 0; i < eventsBody.length; i++) {
            if (eventsBody[i].category_names) {
                let cat_names = eventsBody[i].category_names;
                eventsBody[i].category_names = cat_names.split(',');
            }
            if (eventsBody[i].category_ids) {
                let cat_ids = eventsBody[i].category_ids;
                eventsBody[i].category_ids = cat_ids.split(',');
            }
        }
        events.value = eventsBody;
    }
    const getEvent = async (id) => {
        const response = await axios.get("/event/" + id);
        let eventBody = response.data.body;
        console.log(response.data)
        if (eventBody.category_names) {
            let cat_names = eventBody.category_names;
            eventBody.category_names = cat_names.split(',');
        }
        if (eventBody.category_ids) {
            let cat_ids = eventBody.category_ids;
            eventBody.category_ids = cat_ids.split(',');
        }


        event.value = eventBody;
    }

    const storeEvent = async (data) => {
        try {
            console.log("event" + data);
            // data.time_start = moment(String(data.time_start)).format('YYYY/MM/DD hh:mm;ss')
            // data.time_end = moment(String(data.time_end)).format('YYYY/MM/DD hh:mm;ss')
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