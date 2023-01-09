import {RootState} from "../app/Store";
import {createSelector} from "reselect";

export const selectNews = (state: RootState) => state.news;

export const selectNewsList = createSelector(selectNews, (story) => story.news);

export const selectCurrentPage = createSelector(selectNews, (story) => story.page);

export const selectPageSize = createSelector(selectNews, (story) => story.pageSize);

export const selectLoading = createSelector(selectNews, (story) => story.loading);

export const selectPageCount = createSelector(selectNewsList, selectPageSize, (news, pageSize) => Math.ceil(news.length / pageSize));

export const selectPageNews = createSelector(selectNewsList, selectPageSize, selectCurrentPage, selectPageCount, (news, pageSize, currentPage) => {
    const start = (currentPage - 1) * pageSize;
    return news.slice(start, start + pageSize);
});

export const selectActiveNewsId = createSelector(selectNews, (story) => story.activeNewsId);

export const selectActiveNews = createSelector(selectNewsList, selectActiveNewsId, (news, id) => news.find(story => story.id === id) || null);



export const selectModels = (state: RootState) => state.models;

export const selectModelsList = createSelector(selectModels, (model) => model.models);

export const selectLoadingModels = createSelector(selectModels, (model) => model.loading);


export const selectActiveModelsId = createSelector(selectModels, (model) => model.activeModelsId);

export const selectActiveModels = createSelector(selectNewsList, selectActiveNewsId, (models, id) => models.find(model => model.id === id) || null);



