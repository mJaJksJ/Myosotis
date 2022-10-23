import StartPage from "./Components/StartPage/StartPage";
import SurveyFieldsList from "./Components/SurveyFieldsList/SurveyFieldsList";
import TextAudioInput from "./Components/TextAudioInput/TextAudioInput";
import SurveyField from "./Components/SurveyField/SurveyField";

const AppRoutes =  [
    {
        index: true,
        element: <StartPage />
    },
    {
        path: '/Myosotis',
        element: <StartPage />
    },
    {
        path: '/survey',
        element: <SurveyFieldsList />
    },
    {
        path: '/survey-field',
        element: <SurveyField />
    }
];

export default AppRoutes;
