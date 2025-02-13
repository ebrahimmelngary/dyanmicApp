import React,{useState} from 'react';
import { SafeAreaView } from 'react-native';
import DynamicComponent from '../../components/DynamicComponent';
import { FormContext, NavigationContext } from '../../context';
import styles from './styles';

interface Config {
  home: string;
  pages: { name: string; content: any }[];
}

interface DynamicPageBuilderProps {
  config: Config;
  navigation: any;
}

 const DynamicPageBuilder: React.FC<DynamicPageBuilderProps> = ({ config, navigation }) => {
    interface FormState {
      name?: string;
      email?: string;
    }
    const [formState, setFormState] = useState<FormState>({});
    const [currentPage, _setCurrentPage] = useState(config.home);

    const handleAction = (actionType: string, data: any) => {
      switch (actionType) {
        case 'handleSubmit':
          if (!formState.name || !formState.email) {
            // Show error
            return;
          }
          navigation.navigate('ListScreen');
          break;
        case 'showUserDetails':
          console.log('Show user details:', data);
          break;
        default:
          console.warn(`Unknown action type: ${actionType}`);
      }
    };

    const currentPageConfig = config.pages.find((page:{name:string}) => page.name === currentPage);
    if (!currentPageConfig) {return null;}

    return (
      <FormContext.Provider value={{ formState, setFormState }}>
        <NavigationContext.Provider value={{ navigation, handleAction }}>
          <SafeAreaView style={styles.container}>
            <DynamicComponent {...currentPageConfig.content} />
          </SafeAreaView>
        </NavigationContext.Provider>
      </FormContext.Provider>
    );
  };

  export default DynamicPageBuilder;
