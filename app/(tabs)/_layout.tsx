import { Tabs } from 'expo-router';
import React from 'react';
import { HapticTab } from '@/components/haptic-tab';
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.onSurface,
        tabBarInactiveTintColor: theme.colors.outline,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={28}
              color={focused ? theme.colors.onBackground : theme.colors.outline}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(explore)"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'map-marker' : 'map-marker-outline'}
              size={28}
              color={focused ? theme.colors.onBackground : theme.colors.outline}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Cuenta',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={28}
              color={focused ? theme.colors.onBackground : theme.colors.outline}
            />
          ),
        }}
      />

    </Tabs>
  );
}
