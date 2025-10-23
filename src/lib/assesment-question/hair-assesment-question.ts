import type { InputQuestion, OptionQuestion } from "@/types/question";
import type { AppDispatch } from "../redux/store";
import {
  updateAge,
  updateGender,
  updateName,
  updatePhone,
} from "../redux/features/about-you";
import type { useAboutYou } from "../redux/apphooks/useAboutYou";
import {
  updateDandruffStatus,
  updateFamilyHairlossHistory,
} from "../redux/features/hair-health";
import {
  updateConstipatedStatus,
  updateEnergyLevelStatus,
  updateGasAcidityBloatingStatus,
  updateSleepStatus,
  updateStressStatus,
} from "../redux/features/internal-health";

type AboutYouQuestion = InputQuestion | OptionQuestion;
export const aboutYouQuestionFn = (
  dispatch: AppDispatch,
  aboutYouSelector: ReturnType<typeof useAboutYou>
): AboutYouQuestion[] => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateName(e.target.value));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(updatePhone(value));
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(updateAge(value));
  };

  const handleGenderChange = (id: string) => {
    const gender = id == "male" ? "MALE" : "FEMALE";

    dispatch(updateGender(gender));
  };

  const aboutYouQuestions: AboutYouQuestion[] = [
    {
      questionTitle: "Before we Start, can we get your name ?",
      type: "input",
      updateFn: handleNameChange,
      feild: "name",
      value: aboutYouSelector.name,
    },
    {
      questionTitle: "Phone Number",
      type: "input",
      updateFn: handlePhoneChange,
      feild: "phone",
      value: aboutYouSelector.phone,
    },
    {
      questionTitle: "How Old are You?",
      type: "input",
      updateFn: handleAgeChange,
      feild: "age",
      value: aboutYouSelector.age,
    },
    {
      questionTitle: "Gender",
      type: "option",
      options: [
        { id: "male", value: "male", optionTitle: "Male" },
        { id: "female", value: "female", optionTitle: "Female" },
      ],
      updateFn: handleGenderChange,
    },
  ];

  return aboutYouQuestions;
};

type HairHealthQuestion = OptionQuestion;
export const hairHealthQuestionFn = (dispatch: AppDispatch) => {
  const handleFamilyHairfallHistory = (selectedOption: string) => {
    dispatch(updateFamilyHairlossHistory(selectedOption));
  };

  const handleDandruffHistory = (selectedOption: string) => {
    dispatch(updateDandruffStatus(selectedOption));
  };

  const hairHealthQuestion: HairHealthQuestion[] = [
    {
      questionTitle: "Do you have a family history of hair loss?",
      type: "option",
      options: [
        {
          id: "o1",
          value: "Mother or anyone from mother's side of the family",
          optionTitle: "Mother or anyone from mother's side of the family",
        },
        {
          id: "o2",
          value: "Father or anyone from father's side of the family",
          optionTitle: "Father or anyone from father's side of the family",
        },
        {
          id: "o3",
          value: "Both",
          optionTitle: "Both",
        },
        {
          id: "o4",
          value: "None",
          optionTitle: "None",
        },
      ],
      updateFn: handleFamilyHairfallHistory,
    },
    {
      questionTitle: "Do you have dandruff?",
      type: "option",
      options: [
        {
          id: "o1",
          value: "No",
          optionTitle: "No",
        },
        {
          id: "o2",
          value: "Mild dandruff (small, white flakes)",
          optionTitle: "Mild dandruff (small, white flakes)",
        },
        {
          id: "o3",
          value:
            "Heavy dandruff (sticky dandruff found in nails on scratching or visible on clothes)",
          optionTitle:
            "Heavy dandruff (sticky dandruff found in nails on scratching or visible on clothes)",
        },
        {
          id: "o4",
          value:
            "Diagnosed with Psoriasis / Seborrheic Dermatitis % A skin condition that causes red, dry patches on your scalp.",
          optionTitle:
            "Diagnosed with Psoriasis / Seborrheic Dermatitis (A skin condition that causes red, dry patches on your scalp.)",
        },
      ],
      updateFn: handleDandruffHistory,
    },
  ];

  return hairHealthQuestion;
};

type InternalHealthQuerstion = OptionQuestion;
export const internalHealthQuestionFn = (dispatch: AppDispatch) => {
  const handleConstipatedStatusUpdate = (selectedValue: string) => {
    dispatch(updateConstipatedStatus(selectedValue));
  };

  const handleEnergyLevelStatusUpdate = (selectedValue: string) => {
    dispatch(updateEnergyLevelStatus(selectedValue));
  };
  const handleGasAcidityStatusUpdate = (selectedValue: string) => {
    dispatch(updateGasAcidityBloatingStatus(selectedValue));
  };

  const handleStressedStatusUpdate = (selectedValue: string) => {
    dispatch(updateStressStatus(selectedValue));
  };

  const handleSleepStatusUpdate = (selectedValue: string) => {
    dispatch(updateSleepStatus(selectedValue));
  };

  const internalHealthQuestions: OptionQuestion[] = [
    {
      questionTitle: "Do you feel constipated? (कब्ज़)",
      type: "option",
      options: [
        {
          id: "constipation_no",
          value: "No / Once in a while",
          optionTitle: "No / Once in a while",
        },
        {
          id: "constipation_yes",
          value: "Yes (fewer than 3 stools a week)",
          optionTitle: "Yes (fewer than 3 stools a week)",
        },
        {
          id: "constipation_unsatisfied",
          value:
            "Unable to pass stool properly / feeling unsatisfied after passing stools",
          optionTitle:
            "Unable to pass stool properly / feeling unsatisfied after passing stools",
        },
        {
          id: "constipation_ibs",
          value: "Suffering from Irritable Bowel Syndrome",
          optionTitle: "Suffering from Irritable Bowel Syndrome",
        },
      ],
      updateFn: handleConstipatedStatusUpdate,
    },
    {
      questionTitle: "How are your energy levels during the day?",
      type: "option",
      options: [
        {
          id: "energy_normal",
          value: "Always high / Normal energy levels throughout the day",
          optionTitle: "Always high / Normal energy levels throughout the day",
        },
        {
          id: "energy_morning_low",
          value: "Low when I wake up, then gradually increase",
          optionTitle: "Low when I wake up, then gradually increase",
        },
        {
          id: "energy_afternoon_low",
          value: "Very low in the afternoon",
          optionTitle: "Very low in the afternoon",
        },
        {
          id: "energy_evening_low",
          value: "Low by evening/night",
          optionTitle: "Low by evening/night",
        },
        {
          id: "energy_always_low",
          value: "Always low",
          optionTitle: "Always low",
        },
      ],
      updateFn: handleEnergyLevelStatusUpdate,
    },
    {
      questionTitle: "Do you have Gas, Acidity or Bloating?",
      type: "option",
      options: [
        { id: "gas_no", value: "No", optionTitle: "No" },
        {
          id: "gas_sometimes",
          value: "Sometimes (1-2 times a week or when I eat out)",
          optionTitle: "Sometimes (1-2 times a week or when I eat out)",
        },
        {
          id: "gas_often",
          value: "Often (3+ times a week)",
          optionTitle: "Often (3+ times a week)",
        },
      ],
      updateFn: handleGasAcidityStatusUpdate,
    },
    {
      questionTitle: "How stressed are you?",
      type: "option",
      options: [
        { id: "stress_none", value: "None", optionTitle: "None" },
        { id: "stress_low", value: "Low", optionTitle: "Low" },
        {
          id: "stress_moderate",
          value: "Moderate(work, family etc )",
          optionTitle: "Moderate(work, family etc )",
        },
        {
          id: "stress_high",
          value: "High (Loss of close one, separation, home, illness)",
          optionTitle: "High (Loss of close one, separation, home, illness)",
        },
      ],
      updateFn: handleStressedStatusUpdate,
    },
    {
      questionTitle: "How well do you sleep?",
      type: "option",
      options: [
        {
          id: "sleep_good",
          value: "Very peacefully for 6-8 hours",
          optionTitle: "Very peacefully for 6-8 hours",
        },
        {
          id: "sleep_disturbed",
          value: "Disturbed sleep (wake up multiple times at night)",
          optionTitle: "Disturbed sleep (wake up multiple times at night)",
        },
        {
          id: "sleep_difficulty",
          value: "Difficulty falling asleep",
          optionTitle: "Difficulty falling asleep",
        },
      ],
      updateFn: handleSleepStatusUpdate,
    },
  ];

  return internalHealthQuestions;
};
