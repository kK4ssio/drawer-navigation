// 1. Importações essenciais para o Drawer e para o Expo Router
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

// 2. Importação crucial para permitir o gesto de arrastar/abrir o menu
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Exporta o componente principal do Layout que define o Drawer
export default function DrawerLayout() {
  return (
    // IMPORTANTE: Envolver com GestureHandlerRootView para gestos nativos funcionarem
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        // Configurações Padrão para TODOS os cabeçalhos das telas
        screenOptions={{
          headerShown: true, // Garante que o cabeçalho seja sempre visível
          drawerActiveTintColor: '#3b82f6', // Cor do item ativo no menu
          
          // Adiciona o botão de 3 riscos (hambúrguer) ao lado esquerdo de TODOS os cabeçalhos
          headerLeft: () => <DrawerToggleButton />, 
        }}
      >
        {/* --------------------- Definição da Tela 1 --------------------- */}
        <Drawer.Screen
          name="index" // Rota para o arquivo 'app/index.tsx' (Home)
          options={{
            drawerLabel: 'Home (Tela 1)', // Texto que aparece no menu lateral
            title: 'Início', // Título no topo do cabeçalho
            // Não é necessário o headerLeft aqui, pois já foi definido globalmente acima.
          }}
        />

        {/* --------------------- Definição da Tela 2 --------------------- */}
        <Drawer.Screen
          name="Tela2" // Rota para o arquivo 'app/Tela2.tsx'
          options={{
            drawerLabel: 'Segunda Tela',
            title: 'Página 2',
          }}
        />

        {/* --------------------- Definição da Tela 3 --------------------- */}
        <Drawer.Screen
          name="Tela3" // Rota para o arquivo 'app/Tela3.tsx'
          options={{
            drawerLabel: 'Terceira Tela',
            title: 'Página 3',
          }}
        />
        
        {/* Se você tivesse arquivos de rota que NÃO deveriam aparecer no menu (ex: tela de Login), 
          você poderia ocultá-los com a opção: drawerItemStyle: { display: 'none' }
        */}
      </Drawer>
    </GestureHandlerRootView>
  );
}