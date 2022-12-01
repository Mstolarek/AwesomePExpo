import React from "react";
import { NavigationProvider } from "./src/Navigation/NavigationProvider";
import Toast from "react-native-toast-message";
import { ColorContextProvider } from "./src/StateManagement/ColorContext/ColorContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected);
    });
  });

  return (
    <ColorContextProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationProvider />
        <Toast />
      </QueryClientProvider>
    </ColorContextProvider>
  );
};

export default App;
