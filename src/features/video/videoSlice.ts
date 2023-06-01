import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../store";

export interface VideoState {
	videoOpen: boolean;
}

const initialState: VideoState = {
	videoOpen: false,
};

export const videoSlice = createSlice({
	name: "video",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		showVideo: (state) => {
			state.videoOpen = true;
		},
		hideVideo: (state) => {
			state.videoOpen = false;
		},
	},
});

export const { showVideo, hideVideo } = videoSlice.actions;

export const selectVideoOpen = (state: AppState) => state.video.videoOpen;

export default videoSlice.reducer;
