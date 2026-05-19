import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { useMemo, useRef, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ElectronicsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollViewRef = useRef<ScrollView>(null);

  // 🔷 CATEGORIES FOR TOP FILTER TABS
  const categories = [
    { id: "All", name: "All", icon: "grid" },
    { id: "Electronics", name: "Electronics", icon: "hardware-chip" },
    { id: "Mobile", name: "Mobile", icon: "phone-portrait" },
    { id: "Laptop", name: "Laptop", icon: "laptop" },
    { id: "AC", name: "AC", icon: "snow" },
    { id: "Fridge", name: "Fridge", icon: "cube" },
    { id: "Microwave", name: "Microwave", icon: "restaurant" },
    { id: "TV", name: "TV", icon: "tv" },
    { id: "Washing", name: "Washing", icon: "water" },
    { id: "Tablet", name: "Tablet", icon: "tablet-portrait" },
    { id: "Gaming", name: "Gaming", icon: "game-controller" },
    { id: "Audio", name: "Audio", icon: "headset" },
    { id: "Camera", name: "Camera", icon: "camera" },
  ];

  // 🔷 PRODUCT GENERATOR FUNCTION - Creates 10 products per category using loop
  const generateProducts = (baseProduct: any, count: number = 10) => {
    const products = [];
    for (let i = 1; i <= count; i++) {
      products.push({
        ...baseProduct,
        name: `${baseProduct.name} ${i}`,
        price: baseProduct.price + i * 1000,
        originalPrice: baseProduct.originalPrice + i * 2000,
        reviews: baseProduct.reviews - i * 50,
        specs: baseProduct.specs,
        imageUrl: baseProduct.imageUrl,
      });
    }
    return products;
  };

  // 🔷 ALL ELECTRONICS PRODUCTS (10 products each using loop)
  const allProducts = useMemo(
    () => ({
      Electronics: generateProducts(
        {
          name: "Premium Electronics Device",
          brand: "Sony",
          brandIcon: "hardware-chip",
          price: 29990,
          originalPrice: 34990,
          rating: "4.8",
          reviews: 2340,
          discount: 14,
          specs: ["Premium Quality", "Latest Tech"],
          imageUrl:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300",
          trusted: true,
        },
        10,
      ),

      Mobile: generateProducts(
        {
          name: "5G Smartphone Pro",
          brand: "Samsung",
          brandIcon: "phone-portrait",
          price: 49999,
          originalPrice: 59999,
          rating: "4.7",
          reviews: 12500,
          discount: 16,
          specs: ["5G", "128GB", "50MP Camera"],
          imageUrl:
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300",
          trusted: true,
        },
        10,
      ),

      Laptop: generateProducts(
        {
          name: "Ultrabook Pro",
          brand: "Dell",
          brandIcon: "laptop",
          price: 84999,
          originalPrice: 99999,
          rating: "4.6",
          reviews: 3450,
          discount: 15,
          specs: ["Intel i7", "16GB RAM", "512GB SSD"],
          imageUrl:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
          trusted: true,
        },
        10,
      ),

      AC: generateProducts(
        {
          name: "Inverter AC",
          brand: "Daikin",
          brandIcon: "snow",
          price: 38990,
          originalPrice: 45990,
          rating: "4.7",
          reviews: 2340,
          discount: 15,
          specs: ["1.5 Ton", "5-Star", "Inverter"],
          imageUrl:
            "https://images.unsplash.com/photo-1631559963625-f43b2d4b93c1?w=300",
          trusted: true,
        },
        10,
      ),

      Fridge: generateProducts(
        {
          name: "Double Door Refrigerator",
          brand: "Samsung",
          brandIcon: "cube",
          price: 45990,
          originalPrice: 54990,
          rating: "4.5",
          reviews: 3420,
          discount: 16,
          specs: ["324L", "Frost Free", "Digital Inverter"],
          imageUrl:
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
          trusted: true,
        },
        10,
      ),

      Microwave: generateProducts(
        {
          name: "Convection Microwave Oven",
          brand: "LG",
          brandIcon: "restaurant",
          price: 15990,
          originalPrice: 19990,
          rating: "4.6",
          reviews: 2340,
          discount: 20,
          specs: ["28L", "Convection", "Smart Inverter"],
          imageUrl:
            "https://images.unsplash.com/photo-1574267432553-4f462d6dc1d6?w=300",
          trusted: true,
        },
        10,
      ),

      TV: generateProducts(
        {
          name: "4K Ultra HD Smart TV",
          brand: "Samsung",
          brandIcon: "tv",
          price: 54990,
          originalPrice: 69990,
          rating: "4.8",
          reviews: 5670,
          discount: 21,
          specs: ["55-inch", "4K", "QLED"],
          imageUrl:
            "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=300",
          trusted: true,
        },
        10,
      ),

      Washing: generateProducts(
        {
          name: "Fully Automatic Washing Machine",
          brand: "LG",
          brandIcon: "water",
          price: 32990,
          originalPrice: 39990,
          rating: "4.7",
          reviews: 3450,
          discount: 17,
          specs: ["8kg", "Front Load", "WiFi"],
          imageUrl:
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300",
          trusted: true,
        },
        10,
      ),

      Tablet: generateProducts(
        {
          name: "Premium Tablet",
          brand: "Apple",
          brandIcon: "tablet-portrait",
          price: 54900,
          originalPrice: 64900,
          rating: "4.8",
          reviews: 8900,
          discount: 15,
          specs: ["11-inch", "128GB", "WiFi + Cellular"],
          imageUrl:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300",
          trusted: true,
        },
        10,
      ),

      Gaming: generateProducts(
        {
          name: "Gaming Console",
          brand: "Sony",
          brandIcon: "game-controller",
          price: 49990,
          originalPrice: 59990,
          rating: "4.9",
          reviews: 15600,
          discount: 16,
          specs: ["1TB SSD", "4K Gaming", "Wireless Controller"],
          imageUrl:
            "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300",
          trusted: true,
        },
        10,
      ),

      Audio: generateProducts(
        {
          name: "Wireless Noise Cancelling Headphones",
          brand: "Sony",
          brandIcon: "headset",
          price: 24990,
          originalPrice: 29990,
          rating: "4.7",
          reviews: 8900,
          discount: 16,
          specs: ["Noise Cancelling", "30hr Battery", "Bluetooth 5.0"],
          imageUrl:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300",
          trusted: true,
        },
        10,
      ),

      Camera: generateProducts(
        {
          name: "Mirrorless Camera",
          brand: "Canon",
          brandIcon: "camera",
          price: 84990,
          originalPrice: 99990,
          rating: "4.8",
          reviews: 3450,
          discount: 15,
          specs: ["24.2MP", "4K Video", "WiFi"],
          imageUrl:
            "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300",
          trusted: true,
        },
        10,
      ),
    }),
    [],
  );

  // Flatten all products
  const flatProducts = useMemo(() => {
    const products: any[] = [];
    Object.entries(allProducts).forEach(([category, items]) => {
      items.forEach((item: any) => {
        products.push({ ...item, mainCategory: category });
      });
    });
    return products;
  }, [allProducts]);

  // 🔷 ADVANCED SEARCH FILTER
  const filteredProducts = useMemo(() => {
    let filtered = flatProducts;

    // Filter by category tab
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.mainCategory === selectedCategory,
      );
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((product) => {
        return (
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.price.toString().includes(query) ||
          product.specs?.some((spec: string) =>
            spec.toLowerCase().includes(query),
          )
        );
      });
    }

    return filtered;
  }, [flatProducts, selectedCategory, searchQuery]);

  // Handle category press with better feedback
  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <View style={styles.container}>
      {/* 🔷 CATEGORY TABS - FULL WIDTH SCROLLABLE */}
      <View style={styles.tabsWrapper}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContent}
          decelerationRate="fast"
          snapToAlignment="center"
        >
          {categories.map((category) => (
            <Pressable
              key={category.id}
              style={({ pressed }) => [
                styles.tab,
                selectedCategory === category.id && styles.activeTab,
                pressed && styles.tabPressed,
              ]}
              onPress={() => handleCategoryPress(category.id)}
              android_ripple={{ color: "#ccc", borderless: false }}
            >
              <Ionicons
                name={category.icon as any}
                size={14}
                color={selectedCategory === category.id ? "#fff" : "#666"}
              />
              <ThemedText
                style={[
                  styles.tabText,
                  selectedCategory === category.id && styles.activeTabText,
                ]}
              >
                {category.name}
              </ThemedText>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* 🔷 SEARCH BOX - BELOW CATEGORY TABS */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={18}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products by name, brand, or specs..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchQuery !== "" && (
            <TouchableOpacity
              onPress={() => setSearchQuery("")}
              style={styles.clearButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="close-circle" size={18} color="#999" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Search Stats */}
      {searchQuery !== "" && (
        <View style={styles.searchStats}>
          <ThemedText style={styles.searchStatsText}>
            Found {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
          </ThemedText>
        </View>
      )}

      {/* 🔷 PRODUCT GRID */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gridContainer}
      >
        {filteredProducts.length > 0 ? (
          <View style={styles.grid}>
            {filteredProducts.map((item, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.imageBox}>
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.productImage}
                    resizeMode="cover"
                  />
                  {item.discount && (
                    <View style={styles.discountBadge}>
                      <ThemedText style={styles.discountText}>
                        -{item.discount}%
                      </ThemedText>
                    </View>
                  )}
                </View>

                <View style={styles.brandSection}>
                  <View style={styles.brandIcon}>
                    <Ionicons
                      name={item.brandIcon as any}
                      size={10}
                      color="#1976d2"
                    />
                  </View>
                  <ThemedText style={styles.brandName}>{item.brand}</ThemedText>
                  {item.trusted && (
                    <View style={styles.trustedBadge}>
                      <Ionicons
                        name="checkmark-circle"
                        size={10}
                        color="#4caf50"
                      />
                    </View>
                  )}
                </View>

                <ThemedText style={styles.productName} numberOfLines={2}>
                  {item.name}
                </ThemedText>

                <View style={styles.specsContainer}>
                  {item.specs?.slice(0, 2).map((spec: string, idx: number) => (
                    <View key={idx} style={styles.specBadge}>
                      <ThemedText style={styles.specText}>{spec}</ThemedText>
                    </View>
                  ))}
                </View>

                <View style={styles.priceSection}>
                  <ThemedText style={styles.currentPrice}>
                    ₹{item.price.toLocaleString()}
                  </ThemedText>
                  {item.originalPrice && (
                    <ThemedText style={styles.originalPrice}>
                      ₹{item.originalPrice.toLocaleString()}
                    </ThemedText>
                  )}
                </View>

                <View style={styles.ratingSection}>
                  <View style={styles.stars}>
                    <Ionicons name="star" size={10} color="#ffc107" />
                    <ThemedText style={styles.ratingText}>
                      {item.rating}
                    </ThemedText>
                  </View>
                  <ThemedText style={styles.reviewsCount}>
                    ({item.reviews}+)
                  </ThemedText>
                </View>

                <View style={styles.actions}>
                  <TouchableOpacity
                    style={styles.actionBtn}
                    activeOpacity={0.7}
                  >
                    <Ionicons name="cart-outline" size={14} color="#fff" />
                    <ThemedText style={styles.actionBtnText}>Buy</ThemedText>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.actionBtn, styles.wishlistBtn]}
                    activeOpacity={0.7}
                  >
                    <Ionicons name="heart-outline" size={14} color="#1976d2" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.noResults}>
            <Ionicons name="search-outline" size={60} color="#ccc" />
            <ThemedText style={styles.noResultsTitle}>
              No products found
            </ThemedText>
            <ThemedText style={styles.noResultsSubtitle}>
              {selectedCategory !== "All"
                ? `No products found in ${selectedCategory} category. Try another category.`
                : "Try adjusting your search or filter"}
            </ThemedText>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              activeOpacity={0.7}
            >
              <ThemedText style={styles.resetButtonText}>
                Reset All Filters
              </ThemedText>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

// 🔷 STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },

  tabsWrapper: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 8,
  },

  tabsContent: {
    paddingHorizontal: 12,
    gap: 8,
  },

  tab: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: "#f0f2f5",
    minHeight: 40,
  },

  tabPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  activeTab: {
    backgroundColor: "#1976d2",
  },

  tabText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },

  activeTabText: {
    color: "#fff",
    fontWeight: "600",
  },

  searchWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  searchContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    paddingVertical: 0,
  },

  clearButton: {
    padding: 4,
  },

  searchStats: {
    marginTop: 8,
    paddingHorizontal: 16,
    marginBottom: 4,
  },

  searchStatsText: {
    fontSize: 12,
    color: "#666",
  },

  gridContainer: {
    padding: 12,
    paddingBottom: 30,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },

  imageBox: {
    height: 110,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    overflow: "hidden",
    position: "relative",
  },

  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  discountBadge: {
    position: "absolute",
    top: 4,
    left: 4,
    backgroundColor: "#ff4757",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },

  discountText: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#fff",
  },

  brandSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
  },

  brandIcon: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#e3f2fd",
    justifyContent: "center",
    alignItems: "center",
  },

  brandName: {
    fontSize: 9,
    color: "#1976d2",
    fontWeight: "500",
  },

  trustedBadge: {
    marginLeft: 2,
  },

  productName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1a1a2e",
    marginBottom: 4,
    lineHeight: 15,
  },

  specsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 6,
  },

  specBadge: {
    backgroundColor: "#eef2f6",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 8,
  },

  specText: {
    fontSize: 7,
    color: "#666",
  },

  priceSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },

  currentPrice: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2e7d32",
  },

  originalPrice: {
    fontSize: 9,
    color: "#999",
    textDecorationLine: "line-through",
  },

  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 8,
  },

  stars: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    backgroundColor: "#fff3e0",
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 8,
  },

  ratingText: {
    fontSize: 9,
    fontWeight: "600",
    color: "#ff8c00",
  },

  reviewsCount: {
    fontSize: 8,
    color: "#888",
  },

  actions: {
    flexDirection: "row",
    gap: 6,
  },

  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    backgroundColor: "#1976d2",
    paddingVertical: 6,
    borderRadius: 6,
  },

  actionBtnText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#fff",
  },

  wishlistBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1976d2",
    flex: 0.3,
  },

  noResults: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    gap: 10,
  },

  noResultsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
  },

  noResultsSubtitle: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },

  resetButton: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#1976d2",
    borderRadius: 20,
  },

  resetButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
