import { FlatList, View, Text, StyleSheet } from "react-native";

export default function UserList({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      ListEmptyComponent={<Text style={styles.empty}>Nenhum usuário encontrado.</Text>}
      contentContainerStyle={data.length === 0 && styles.emptyContainer}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
          <Text style={styles.city}>{item.address.city}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 4,
  },
  email: {
    fontSize: 15,
    color: "#555",
    marginBottom: 2,
  },
  city: {
    fontSize: 14,
    color: "#888",
    fontStyle: "italic",
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#999",
    fontSize: 16,
    fontWeight: "500",
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
