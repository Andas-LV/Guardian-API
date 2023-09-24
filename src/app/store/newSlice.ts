import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Определение типов
interface NewsState {
  newsList: NewsItem[];
  loading: boolean;
  error: string | null;
}

interface NewsItem {
  // Определите поля новости здесь
}

// Тип для параметров запроса API
interface ApiParams {
  // Определите параметры API здесь
}

// Асинхронное действие для загрузки новостей
export const fetchNews = createAsyncThunk<
  NewsItem[],
  ApiParams,
  {
    rejectValue: string;
  }
>("news/fetchNews", async (params, { rejectWithValue }) => {
  try {
    // Выполните запрос к API здесь, используя axios или другую библиотеку
    const response = await axios.get<NewsItem[]>("API_ENDPOINT", { params });
    return response.data;
  } catch (error) {
    // Обработка ошибок
    return rejectWithValue("фу");
  }
});

// Начальное состояние
const initialState: NewsState = {
  newsList: [],
  loading: false,
  error: null,
};

// Создание среза
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<NewsItem[]>) => {
          state.loading = false;
          state.newsList = action.payload;
        }
      )
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default newsSlice.reducer;
