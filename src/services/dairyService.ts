import diaryData from  '../../data/dairies';
import { DiaryEntry } from '../../types';
import { nonSentitiveDataEntry } from '../../types';

const diaries: Array<DiaryEntry> = diaryData;

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const getNonSentiveDataEntry = (): nonSentitiveDataEntry[] => {

  return diaries.map(({id,date,weather,visibility}) => {
    return {
      id,
      date,
      weather,
      visibility
    };
  });

};


const addEntry = () => {
  return [];
};


export default {
  getEntries,
  addEntry,
  getNonSentiveDataEntry
};