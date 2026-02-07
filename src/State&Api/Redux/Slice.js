import { createSlice } from "@reduxjs/toolkit";
import { focalData, galleryData, contactsData, lineUpData, teamData, aboutData,publicationData,newsData,homeLeadersData,homeLogoData,homePhotosData } from "../Api";

const NieesSlice = createSlice({
  name: "Niees",
  initialState: {
    areas: [],
    galleryItems: [],
    contacts: [],
    lineUp: [],
    about: [],
    team: [],
    publication:[],
    news:[],
    //home sections data
    homeLogo:[],
    homePhotos:[],
    homeLeaders:[],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    // Focal areas
    builder
      .addCase(focalData.pending, (state) => {
        state.loading = true;
      })
      .addCase(focalData.fulfilled, (state, action) => {
        state.loading = false;
        state.areas = action.payload;
      })
      .addCase(focalData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Gallery
    builder
      .addCase(galleryData.fulfilled, (state, action) => {
        state.galleryItems = action.payload;
      })
      .addCase(galleryData.rejected, (state, action) => {
        state.error = action.error.message;
      });

    // Contacts
    builder
      .addCase(contactsData.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(contactsData.rejected, (state, action) => {
        state.error = action.error.message;
      });

    // LineUp
    builder
      .addCase(lineUpData.fulfilled, (state, action) => {
        state.lineUp = action.payload;
      })
      .addCase(lineUpData.rejected, (state, action) => {
        state.error = action.error.message;
      });

    // About
    builder
      .addCase(aboutData.fulfilled, (state, action) => {
        state.about = action.payload;
      })
      .addCase(aboutData.rejected, (state, action) => {
        state.error = action.error.message;
      });

    // Team
    builder
      .addCase(teamData.fulfilled, (state, action) => {
        state.team = action.payload;
      })
      .addCase(teamData.rejected, (state, action) => {
        state.error = action.error.message;
      });

    //Publication
    builder
      .addCase(publicationData.fulfilled, (state, action) => {
        state.publication = action.payload;
      })
      .addCase(publicationData.rejected, (state, action) => {
        state.error = action.error.message;
      });

    //News
    builder
      .addCase(newsData.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(newsData.rejected, (state, action) => {
        state.error = action.error.message;
      });

    //homeLogo
    builder
      .addCase(homeLogoData.fulfilled, (state, action) => {
        state.homeLogo = action.payload;
      })
      .addCase(homeLogoData.rejected, (state, action) => {
        state.error = action.error.message;
      });

       //homeLeader
    builder
      .addCase(homeLeadersData.fulfilled, (state, action) => {
        state.homeLeaders = action.payload;
      })
      .addCase(homeLeadersData.rejected, (state, action) => {
        state.error = action.error.message;
      });

       //homePhotos 
    builder
      .addCase(homePhotosData.fulfilled, (state, action) => {
        state.homePhotos= action.payload;
      })
      .addCase(homePhotosData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default NieesSlice.reducer;
