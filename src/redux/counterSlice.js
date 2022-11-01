import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: { //初期値の設定
		count: 0,
	},
	reducers: { //state更新用関数
		increase: (state) => {
			state.count++;
		},
		decrease: (state) => {
			state.count--;
		},
		reset: (state) => {
			state.count = 0;
		}
	},
});

export const { increase, decrease,reset } = counterSlice.actions;

export default counterSlice.reducer;