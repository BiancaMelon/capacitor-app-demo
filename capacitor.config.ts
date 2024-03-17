import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-app-demo',
  webDir: 'dist/capacitor-app-demo/browser/',
  server: {
    androidScheme: 'https',
  },
};

export default config;
