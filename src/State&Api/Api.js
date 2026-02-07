import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "http://localhost:5000";

//For this for focal areas
export const focalData = createAsyncThunk(
  'data/focalAreas',
  async () => {
    const response = await fetch(`${apiUrl}/Focal`);
    const data = await response.json();
    return data;
  }
);


//For this for Gallery Images
export const galleryData = createAsyncThunk(
  'data/GalleryImages',
  async () => {
    const response = await fetch(`${apiUrl}/Gallery`);
    const data = await response.json();
    return data;
  }
);


//For this for Contacts Data and images logo and links like instagram ...
export const contactsData = createAsyncThunk(
  'data/contactsData',
  async () => {
    const response = await fetch(`${apiUrl}/Contact`);
    const data = await response.json();
    return data;
  }
);

//For this one for get line up data
export const lineUpData = createAsyncThunk(
  'data/lineupData',
  async () => {
    const response = await fetch(`${apiUrl}/Lineup`);
    const data = await response.json();
    return data;
  }
);

//For this one for get about data
export const aboutData = createAsyncThunk(
  'data/aboutData',
  async () => {
    const response = await fetch(`${apiUrl}/About`);
    const data = await response.json();
    return data;
  }
);

//For this one for get team members data
export const teamData = createAsyncThunk(
  'data/teamData',
  async () => {
    const response = await fetch(`${apiUrl}/Team`);
    const data = await response.json();
    return data;
  }
);

//For this one for get publication data
export const publicationData = createAsyncThunk(
  'data/publicationData',
  async () => {
    const response = await fetch(`${apiUrl}/Publication`);
    const data = await response.json();
    return data;
  }
);


//For this one for get news data
export const newsData = createAsyncThunk(
  'data/newsData',
  async () => {
    const response = await fetch(`${apiUrl}/News`);
    const data = await response.json();
    return data;
  })


  //For this one for get home logo data
export const homeLogoData = createAsyncThunk(
  'data/logoData',
  async () => {
    const response = await fetch(`${apiUrl}/Home/Logo`);
    const data = await response.json();
    return data;
  }
);

  //For this one for get home photos data
export const homePhotosData = createAsyncThunk(
  'data/photosData',
  async () => {
    const response = await fetch(`${apiUrl}/Home/Photo`);
    const data = await response.json();
    return data;
  }
);

  //For this one for get home leaders data
export const homeLeadersData = createAsyncThunk(
  'data/leadersData',
  async () => {
    const response = await fetch(`${apiUrl}/Home/Leader`);
    const data = await response.json();
    return data;
  }
);



