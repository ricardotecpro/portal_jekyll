import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mobileapp',
  webDir: 'www',
  // ADICIONE ESTA CONFIGURAÇÃO:
  server: {
    // Permite que o app acesse a API pelo IP (ex: http://192.168.1.10:8080)
    // Isso é crucial para testes em dispositivos físicos.
    cleartext: true
  }
};

export default config;
