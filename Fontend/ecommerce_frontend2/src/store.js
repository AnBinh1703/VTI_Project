import { configureStore } from "@reduxjs/toolkit";
import { RecalApiLoading } from "./components/features/recallApiLoading";

export default configureStore({
    reducer: {
        apiSave: RecalApiLoading.reducer,
    }
})