import { ThemedText } from "@/components/themed-text";
import { Image, ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  //
  // 🔥 TRENDING PRODUCTS
  //
  const products = [
    {
      name: "Dell XPS Laptop",
      category: "Laptop",
      sold: 320,
      image: "https://picsum.photos/id/0/200/200",
    },
    {
      name: "MacBook Pro",
      category: "Laptop",
      sold: 280,
      image: "https://picsum.photos/id/1/200/200",
    },
    {
      name: "Lenovo Legion",
      category: "Laptop",
      sold: 240,
      image: "https://picsum.photos/id/2/200/200",
    },
    {
      name: "HP Pavilion",
      category: "Laptop",
      sold: 190,
      image: "https://picsum.photos/id/3/200/200",
    },
    {
      name: "ASUS ROG",
      category: "Laptop",
      sold: 210,
      image: "https://picsum.photos/id/4/200/200",
    },

    {
      name: "iPhone 15",
      category: "Mobile",
      sold: 520,
      image: "https://picsum.photos/id/5/200/200",
    },
    {
      name: "Samsung S24",
      category: "Mobile",
      sold: 470,
      image: "https://picsum.photos/id/6/200/200",
    },
    {
      name: "OnePlus 12",
      category: "Mobile",
      sold: 390,
      image: "https://picsum.photos/id/7/200/200",
    },
    {
      name: "Vivo X100",
      category: "Mobile",
      sold: 260,
      image: "https://picsum.photos/id/8/200/200",
    },
    {
      name: "Redmi Note",
      category: "Mobile",
      sold: 430,
      image: "https://picsum.photos/id/9/200/200",
    },

    {
      name: "LG Smart TV",
      category: "TV",
      sold: 160,
      image: "https://picsum.photos/id/10/200/200",
    },
    {
      name: "Sony Bravia",
      category: "TV",
      sold: 140,
      image: "https://picsum.photos/id/11/200/200",
    },
    {
      name: "Samsung OLED",
      category: "TV",
      sold: 180,
      image: "https://picsum.photos/id/12/200/200",
    },

    {
      name: "Whirlpool Fridge",
      category: "Fridge",
      sold: 120,
      image: "https://picsum.photos/id/13/200/200",
    },
    {
      name: "LG Refrigerator",
      category: "Fridge",
      sold: 110,
      image: "https://picsum.photos/id/14/200/200",
    },
    {
      name: "Samsung Fridge",
      category: "Fridge",
      sold: 150,
      image: "https://picsum.photos/id/15/200/200",
    },

    {
      name: "IFB Washing Machine",
      category: "Washing",
      sold: 130,
      image: "https://picsum.photos/id/16/200/200",
    },
    {
      name: "Bosch Washer",
      category: "Washing",
      sold: 90,
      image: "https://picsum.photos/id/17/200/200",
    },
    {
      name: "LG Washing Machine",
      category: "Washing",
      sold: 170,
      image: "https://picsum.photos/id/18/200/200",
    },

    {
      name: "Daikin AC",
      category: "AC",
      sold: 140,
      image: "https://picsum.photos/id/19/200/200",
    },
    {
      name: "Voltas AC",
      category: "AC",
      sold: 160,
      image: "https://picsum.photos/id/20/200/200",
    },
    {
      name: "Blue Star AC",
      category: "AC",
      sold: 110,
      image: "https://picsum.photos/id/21/200/200",
    },

    {
      name: "Boat Headset",
      category: "Accessories",
      sold: 600,
      image: "https://picsum.photos/id/22/200/200",
    },
    {
      name: "JBL Speaker",
      category: "Accessories",
      sold: 310,
      image: "https://picsum.photos/id/23/200/200",
    },
    {
      name: "Apple AirPods",
      category: "Accessories",
      sold: 280,
      image: "https://picsum.photos/id/24/200/200",
    },

    {
      name: "Gaming Keyboard",
      category: "Gaming",
      sold: 220,
      image: "https://picsum.photos/id/25/200/200",
    },
    {
      name: "Gaming Mouse",
      category: "Gaming",
      sold: 260,
      image: "https://picsum.photos/id/26/200/200",
    },
    {
      name: "PS5 Console",
      category: "Gaming",
      sold: 180,
      image: "https://picsum.photos/id/27/200/200",
    },

    {
      name: "Office Chair",
      category: "Furniture",
      sold: 95,
      image: "https://picsum.photos/id/28/200/200",
    },
    {
      name: "Wooden Table",
      category: "Furniture",
      sold: 75,
      image: "https://picsum.photos/id/29/200/200",
    },
    {
      name: "Sofa Set",
      category: "Furniture",
      sold: 55,
      image: "https://picsum.photos/id/30/200/200",
    },

    {
      name: "Nike Shoes",
      category: "Fashion",
      sold: 330,
      image: "https://picsum.photos/id/31/200/200",
    },
    {
      name: "Adidas Shoes",
      category: "Fashion",
      sold: 290,
      image: "https://picsum.photos/id/32/200/200",
    },
    {
      name: "Puma Shoes",
      category: "Fashion",
      sold: 210,
      image: "https://picsum.photos/id/33/200/200",
    },

    {
      name: "Men T-Shirt",
      category: "Clothing",
      sold: 430,
      image: "https://picsum.photos/id/34/200/200",
    },
    {
      name: "Women Saree",
      category: "Clothing",
      sold: 250,
      image: "https://picsum.photos/id/35/200/200",
    },
    {
      name: "Kids Wear",
      category: "Clothing",
      sold: 190,
      image: "https://picsum.photos/id/36/200/200",
    },

    {
      name: "Mixer Grinder",
      category: "Kitchen",
      sold: 145,
      image: "https://picsum.photos/id/37/200/200",
    },
    {
      name: "Rice Cooker",
      category: "Kitchen",
      sold: 115,
      image: "https://picsum.photos/id/38/200/200",
    },
    {
      name: "Microwave Oven",
      category: "Kitchen",
      sold: 135,
      image: "https://picsum.photos/id/39/200/200",
    },

    {
      name: "Cycle",
      category: "Sports",
      sold: 80,
      image: "https://picsum.photos/id/40/200/200",
    },
    {
      name: "Treadmill",
      category: "Sports",
      sold: 40,
      image: "https://picsum.photos/id/41/200/200",
    },
    {
      name: "Dumbbells",
      category: "Sports",
      sold: 120,
      image: "https://picsum.photos/id/42/200/200",
    },

    {
      name: "Tablet",
      category: "Electronics",
      sold: 140,
      image: "https://picsum.photos/id/43/200/200",
    },
    {
      name: "Smart Watch",
      category: "Electronics",
      sold: 340,
      image: "https://picsum.photos/id/44/200/200",
    },
    {
      name: "Power Bank",
      category: "Electronics",
      sold: 410,
      image: "https://picsum.photos/id/45/200/200",
    },

    {
      name: "Printer",
      category: "Office",
      sold: 95,
      image: "https://picsum.photos/id/46/200/200",
    },
    {
      name: "Scanner",
      category: "Office",
      sold: 50,
      image: "https://picsum.photos/id/47/200/200",
    },
    {
      name: "Projector",
      category: "Office",
      sold: 65,
      image: "https://picsum.photos/id/48/200/200",
    },

    {
      name: "Camera",
      category: "Photography",
      sold: 70,
      image: "https://picsum.photos/id/49/200/200",
    },
    {
      name: "Drone",
      category: "Photography",
      sold: 35,
      image: "https://picsum.photos/id/50/200/200",
    },
    {
      name: "Tripod",
      category: "Photography",
      sold: 85,
      image: "https://picsum.photos/id/51/200/200",
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* ========================= */}
        {/* PAGE HEADER */}
        {/* ========================= */}

        <View style={styles.headerContainer}>
          <ThemedText style={styles.pageTitle}>📊 Trending</ThemedText>
        </View>

        {/* ========================= */}
        {/* PRODUCT GRID - 2 per row */}
        {/* ========================= */}

        <View style={styles.grid}>
          {products.map((item, index) => (
            <View key={index} style={styles.card}>
              {/* PRODUCT IMAGE */}
              <Image source={{ uri: item.image }} style={styles.productImage} />

              {/* PRODUCT NAME */}
              <ThemedText style={styles.productName}>{item.name}</ThemedText>

              {/* CATEGORY */}
              <ThemedText style={styles.category}>{item.category}</ThemedText>

              {/* DIVIDER */}
              <View style={styles.divider} />

              {/* SOLD */}
              <View style={styles.row}>
                <ThemedText style={styles.label}>Total Sold</ThemedText>
                <ThemedText style={styles.sold}>{item.sold}</ThemedText>
              </View>

              {/* PROGRESS */}
              <View style={styles.progressBg}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${Math.min(item.sold / 6, 100)}%`,
                    },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

//
// 🔥 STYLES - SMALLER & COMPACT
//

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },

  container: {
    padding: 12,
  },

  //
  // HEADER
  //
  headerContainer: {
    marginBottom: 12,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111",
  },

  //
  // GRID - 2 per row
  //
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  //
  // CARD - smaller
  //
  card: {
    width: "48.5%",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },

  //
  // PRODUCT IMAGE
  //
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: "#f0f0f0",
  },

  //
  // PRODUCT
  //
  productName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },

  category: {
    marginTop: 2,
    color: "#777",
    fontSize: 11,
  },

  divider: {
    height: 1,
    backgroundColor: "#eeeeee",
    marginVertical: 8,
  },

  //
  // ROW
  //
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    color: "#666",
    fontSize: 11,
  },

  sold: {
    color: "#1976d2",
    fontWeight: "700",
    fontSize: 14,
  },

  //
  // PROGRESS - smaller
  //
  progressBg: {
    height: 5,
    backgroundColor: "#eeeeee",
    borderRadius: 10,
    marginTop: 8,
    overflow: "hidden",
  },

  progressFill: {
    height: 5,
    backgroundColor: "#1976d2",
    borderRadius: 10,
  },
});
