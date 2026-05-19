import { Slot, Tabs, usePathname, useRouter } from "expo-router";

import React from "react";

import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import { AntDesign, Feather } from "@expo/vector-icons";

export default function Layout() {
  const { width } = useWindowDimensions();

  const isDesktop = width >= 768;

  if (isDesktop) {
    return <DesktopMarketplaceLayout />;
  }

  return <MobileTabs />;
}

//
// 📱 MOBILE TABS
//
function MobileTabs() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,

        //
        // ✅ HEADER STYLE
        //
        headerStyle: {
          backgroundColor: "#ffffff",
        },

        headerShadowVisible: false,

        //
        // ✅ VINATRIX LOGO
        //
        headerTitle: () => (
          <Image
            source={require("../../assets/images/vinatrixlogo.png")}
            style={{
              width: 320,
              height: 155,

              // ✅ LEFT ALIGN
              marginLeft: -100,

              resizeMode: "contain",
            }}
          />
        ),

        //
        // ✅ TITLE ALIGN
        //
        headerTitleAlign: "left",

        //
        // ✅ RIGHT ACTIONS
        //
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              marginRight: 10,
            }}
          >
            {/* 🔥 SELL BUTTON */}
            <TouchableOpacity
              onPress={() => router.push("/seller")}
              style={{
                flexDirection: "row",
                alignItems: "center",

                backgroundColor: "#ffebee",

                paddingHorizontal: 12,
                paddingVertical: 8,

                borderRadius: 12,

                marginRight: 10,
              }}
            >
              <Feather name="shopping-bag" size={16} color="#e53935" />

              <Text
                style={{
                  marginLeft: 6,

                  color: "#e53935",

                  fontWeight: "700",

                  fontSize: 12,
                }}
              >
                Sell
              </Text>
            </TouchableOpacity>

            {/* 👤 PROFILE */}
            <TouchableOpacity
              onPress={() => router.push("/profile")}
              style={{
                width: 38,
                height: 38,

                borderRadius: 10,

                backgroundColor: "#f3f4f6",

                justifyContent: "center",
                alignItems: "center",

                marginRight: 8,
              }}
            >
              <Feather name="user" size={18} color="#333" />
            </TouchableOpacity>

            {/* 🔑 LOGIN */}
            <TouchableOpacity
              onPress={() => router.push("/auth")}
              style={{
                width: 38,
                height: 38,

                borderRadius: 10,

                backgroundColor: "#e3f2fd",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="login" size={18} color="#1976d2" />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}

//
// 💻 DESKTOP MARKETPLACE
//
function DesktopMarketplaceLayout() {
  const router = useRouter();

  const pathname = usePathname();

  return (
    <View style={{ flex: 1 }}>
      {/* ========================= */}
      {/* TOP NAVBAR */}
      {/* ========================= */}

      <View
        style={{
          height: 75,

          borderBottomWidth: 1,
          borderBottomColor: "#eeeeee",

          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

          paddingHorizontal: 20,

          backgroundColor: "#ffffff",
        }}
      >
        {/* ========================= */}
        {/* LEFT → LOGO */}
        {/* ========================= */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            marginLeft: -10,
          }}
        >
          <Image
            source={require("../../assets/images/vinatrixlogo.png")}
            style={{
              width: 260,
              height: 270,

              resizeMode: "contain",
            }}
          />
        </View>

        {/* ========================= */}
        {/* RIGHT ACTIONS */}
        {/* ========================= */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* 🔥 SELL BUTTON */}
          <TouchableOpacity
            onPress={() => router.push("/seller")}
            style={{
              flexDirection: "row",
              alignItems: "center",

              backgroundColor: "#ffebee",

              paddingHorizontal: 16,
              paddingVertical: 10,

              borderRadius: 12,

              marginRight: 14,
            }}
          >
            <Feather name="shopping-bag" size={18} color="#e53935" />

            <Text
              style={{
                marginLeft: 8,

                color: "#e53935",

                fontWeight: "700",

                fontSize: 14,
              }}
            >
              Sell Products
            </Text>
          </TouchableOpacity>

          {/* 👤 PROFILE */}
          <TouchableOpacity
            onPress={() => router.push("/profile")}
            style={{
              width: 42,
              height: 42,

              borderRadius: 12,

              backgroundColor: "#f3f4f6",

              justifyContent: "center",
              alignItems: "center",

              marginRight: 10,
            }}
          >
            <Feather name="user" size={20} color="#333" />
          </TouchableOpacity>

          {/* 🔑 LOGIN */}
          <TouchableOpacity
            onPress={() => router.push("/auth")}
            style={{
              width: 42,
              height: 42,

              borderRadius: 12,

              backgroundColor: "#e3f2fd",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="login" size={20} color="#1976d2" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        {/* ========================= */}
        {/* SIDEBAR */}
        {/* ========================= */}

        <View
          style={{
            width: 240,

            backgroundColor: "#ffffff",

            borderRightWidth: 1,
            borderRightColor: "#eeeeee",

            paddingTop: 20,
            paddingHorizontal: 12,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <SidebarItem
              title="Top Sellers"
              active={pathname === "/"}
              onPress={() => router.push("/")}
            />

            <SidebarItem
              title="All Products"
              active={pathname === "/allproducts"}
              onPress={() => router.push("/allproducts")}
            />

            <SidebarItem
              title="Agriculture"
              active={pathname === "/agriculture"}
              onPress={() => router.push("/agriculture")}
            />

            <SidebarItem
              title="Vehicles"
              active={pathname === "/vehicles"}
              onPress={() => router.push("/vehicles")}
            />

            <SidebarItem
              title="Real Estate"
              active={pathname === "/realestate"}
              onPress={() => router.push("/realestate")}
            />

            <SidebarItem
              title="Clothings"
              active={pathname === "/clothings"}
              onPress={() => router.push("/clothings")}
            />

            <SidebarItem
              title="Super Market"
              active={pathname === "/super-market"}
              onPress={() => router.push("/super-market")}
            />
          </ScrollView>
        </View>

        {/* ========================= */}
        {/* PAGE CONTENT */}
        {/* ========================= */}

        <View
          style={{
            flex: 1,
            backgroundColor: "#f9fafb",
          }}
        >
          <Slot />
        </View>
      </View>
    </View>
  );
}

//
// 🔹 SIDEBAR ITEM
//

type SidebarItemProps = {
  title: string;
  active: boolean;
  onPress: () => void;
};

function SidebarItem({ title, active, onPress }: SidebarItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 12,
        paddingHorizontal: 12,

        borderRadius: 10,

        marginBottom: 8,

        backgroundColor: active ? "#e3f2fd" : "transparent",
      }}
    >
      <Text
        style={{
          color: active ? "#1976d2" : "#333333",

          fontWeight: active ? "700" : "500",

          fontSize: 15,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
