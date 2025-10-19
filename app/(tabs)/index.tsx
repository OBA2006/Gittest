import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// --- TYPE DEFINITIONS ---
interface QuickLinkProps {
  iconName: string;
  label: string;
  iconColor: string;
  iconBackground: string;
  topMargin?: number;
}

interface SpendCategoryProps {
  iconName: string;
  title: string;
  iconColor: string;
  spent: string;
  remaining: string;
  budget: string;
  progressPercent: number; // 0 to 100
}

// Renaming the main component to 'App' for typical index.js/App.js compatibility
const App = () => {
  const { width } = Dimensions.get('window');

  // --- Utility Components ---

  const Header = () => (
    <View style={styles.header}>
      <Text style={styles.logoText}>OneBank</Text>
      <View style={styles.headerIcons}>
        <Icon name="magnify" size={24} color="#fff" style={styles.iconMargin} />
        <View>
          <Icon name="bell-outline" size={24} color="#fff" style={styles.iconMargin} />
          <View style={styles.notificationBadge}><Text style={styles.badgeText}>77</Text></View>
        </View>
        <Icon name="account-circle-outline" size={24} color="#fff" />
      </View>
    </View>
  );

  const QuickLink: React.FC<QuickLinkProps> = ({ iconName, label, iconColor, iconBackground, topMargin = 0 }) => (
    <TouchableOpacity style={[styles.quickLinkContainer, { marginTop: topMargin }]}>
      <View style={[styles.quickLinkIconWrapper, { backgroundColor: iconBackground }]}>
        <Icon name={iconName} size={30} color={iconColor} />
      </View>
      <Text style={styles.quickLinkText}>{label}</Text>
    </TouchableOpacity>
  );

  /**
   * Component for a single Spend Analysis Category.
   * FIX APPLIED HERE: Corrected the background color syntax and fixed the extra closing tag.
   */
  const SpendCategory: React.FC<SpendCategoryProps> = ({ iconName, title, iconColor, spent, remaining, budget, progressPercent }) => (
    <TouchableOpacity style={styles.spendCategoryCard}>
      <View style={styles.spendCategoryMain}>
        
        {/* Left Side: Icon and Title */}
        <View style={styles.spendCategoryLeft}>
          {/* Corrected the backgroundColor concatenation issue: now correctly using opacity via string template */}
          <View 
            style={[styles.spendIconWrapper, { backgroundColor: `${iconColor}20` }]} 
          >
            <Icon name={iconName} size={28} color={iconColor} />
          </View>
          <View>
            <Text style={styles.spendCategoryTitle}>{title}</Text>
            <Text style={styles.spendDataSmall}>₦{remaining} Remaining</Text>
          </View>
        </View>

        {/* Right Side: Data and Arrow */}
        <View style={styles.spendCategoryRight}>
          <View style={styles.spendDataColumn}>
            <Text style={styles.spendDataLarge}>₦{spent} Spent</Text>
            <Text style={styles.spendDataSmall}>₦{budget} Budget</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#fff" />
        </View>
      </View>
      
      {/* Progress Bar */}
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progressPercent}%`, backgroundColor: iconColor }]} />
      </View>
    </TouchableOpacity>
  );

  // --- Main Render Logic ---
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <Header />

        {/* Naira Account Button */}
        <TouchableOpacity style={styles.nairaAccountButton}>
          <Text style={styles.nairaAccountText}>Naira Account</Text>
        </TouchableOpacity>

        {/* Account Balance Card */}
        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.balanceText}>₦475.13</Text>
            <Icon name="chevron-down" size={24} color="#fff" />
          </View>
          <Text style={styles.accountNumber}>0117745897</Text>
          <Text style={styles.accountDetails}>Savings - Regular</Text>
          <Text style={styles.accountName}>Odumeru Mubarak Obafunmilola</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
          {/* Faded Icon Placeholder for the bottom right of the card */}
          <View style={styles.cardIconPlaceholder}>
             <Icon name="fingerprint" size={60} color="rgba(255, 255, 255, 0.1)" />
          </View>
        </View>
        
        {/* Quick Links Section */}
        <Text style={styles.sectionTitle}>Quick Links</Text>
        <View style={styles.quickLinksGrid}>
            {/* First Row (Original Links) */}
            <View style={styles.quickLinksRow}>
                <QuickLink iconName="swap-horizontal" label="Send Money" iconColor="#22c55e" iconBackground="#374151" />
                <QuickLink iconName="file-document-outline" label="Airtime & Data" iconColor="#3b82f6" iconBackground="#374151" />
                <QuickLink iconName="receipt" label="Bill Payment" iconColor="#8b5cf6" iconBackground="#374151" />
                <QuickLink iconName="phone-check-outline" label="Always On" iconColor="#ef4444" iconBackground="#374151" />
            </View>
            {/* Second Row (New Links) */}
            <View style={styles.quickLinksRow}>
                <QuickLink iconName="credit-card-plus-outline" label="Top Up Card" iconColor="#f59e0b" iconBackground="#374151" topMargin={15} />
                <QuickLink iconName="shield-half-full" label="Insurance" iconColor="#06b6d4" iconBackground="#374151" topMargin={15} />
                <QuickLink iconName="finance" label="Invest" iconColor="#10b981" iconBackground="#374151" topMargin={15} />
                <QuickLink iconName="currency-usd" label="Forex" iconColor="#f97316" iconBackground="#374151" topMargin={15} />
            </View>
        </View>

        {/* Special Offers Section - Enhanced and Fixed */}
        <Text style={styles.sectionTitle}>Special Offers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.specialOffersScroll}>
          
          {/* Offer 1: Need Money Quick? (Maintained but styled for dark mode) */}
          <View style={[styles.offerBanner, { width: width * 0.85, backgroundColor: '#4c1d95' }]}>
            <View style={styles.offerTextContainer}>
              <Text style={styles.offerTitle}>Need Money Quick?</Text>
              <Text style={styles.offerDetails}>Loans of up to <Text style={styles.offerAmount}>₦5,000,000.00</Text> available in 5 minutes</Text>
            </View>
            <Icon name="cash-multiple" size={50} color="rgba(255, 255, 255, 0.8)" style={{ marginRight: 10 }} />
            <Text style={styles.offerBadge}>Spe</Text>
          </View>
          
          {/* Offer 2: Save Smart */}
           <View style={[styles.offerBanner, { width: width * 0.85, backgroundColor: '#059669' }]}>
            <View style={styles.offerTextContainer}>
              <Text style={styles.offerTitle}>Save Smart</Text>
              <Text style={styles.offerDetails}>Earn up to <Text style={styles.offerAmount}>10%</Text> on fixed savings plans</Text>
            </View>
            <Icon name="piggy-bank-outline" size={50} color="rgba(255, 255, 255, 0.8)" style={{ marginRight: 10 }} />
            <Text style={styles.offerBadge}>Save</Text>
          </View>

          {/* Offer 3: Refer & Earn (New) */}
          <View style={[styles.offerBanner, { width: width * 0.85, backgroundColor: '#ca8a04' }]}>
            <View style={styles.offerTextContainer}>
              <Text style={styles.offerTitle}>Refer & Earn</Text>
              <Text style={styles.offerDetails}>Get N2,000 for every friend you refer!</Text>
            </View>
            <Icon name="gift-outline" size={50} color="rgba(255, 255, 255, 0.8)" style={{ marginRight: 10 }} />
            <Text style={styles.offerBadge}>Bonus</Text>
          </View>

          {/* Offer 4: Global Payments (New) */}
          <View style={[styles.offerBanner, { width: width * 0.85, backgroundColor: '#be185d' }]}>
            <View style={styles.offerTextContainer}>
              <Text style={styles.offerTitle}>Global Payments</Text>
              <Text style={styles.offerDetails}>Transfer money overseas with low fees.</Text>
            </View>
            <Icon name="earth" size={50} color="rgba(255, 255, 255, 0.8)" style={{ marginRight: 10 }} />
            <Text style={styles.offerBadge}>Intl.</Text>
          </View>
        </ScrollView>

        {/* --- SPEND ANALYSIS SECTION --- */}
        <Text style={styles.sectionTitle}>Spend Analysis</Text>

        {/* Overdraft/Notification Banner (Simulated) */}
        <View style={styles.overdraftBanner}>
            <View style={styles.overdraftHeader}>
                <Icon name="whatsapp" size={18} color="#25D366" style={{ marginRight: 5 }} />
                <Text style={styles.overdraftUser}>Wetfin remain again for the stuff</Text>
                <Text style={styles.overdraftTime}>now</Text>
            </View>
            <Text style={styles.overdraftTitle}>Overdraft</Text>
            <Text style={styles.overdraftSubtitle}>Low on cash? Not a problem</Text>
            <TouchableOpacity style={styles.overdraftButton}>
                <Text style={styles.overdraftButtonText}>Get Overdraft</Text>
            </TouchableOpacity>
        </View>

        {/* Spend Analysis Categories List */}
        <View style={styles.spendList}>
          <SpendCategory 
            iconName="text-box-multiple-outline" 
            title="Bills/Utility" 
            iconColor="#3b82f6"
            spent="0.00" remaining="0.00" budget="0.00" 
            progressPercent={0} // 0% spent
          />
          <SpendCategory 
            iconName="food-apple-outline" 
            title="Eating Out" 
            iconColor="#10b981"
            spent="0.00" remaining="0.00" budget="0.00" 
            progressPercent={0} 
          />
          <SpendCategory 
            iconName="basket-outline" 
            title="Groceries" 
            iconColor="#f59e0b"
            spent="0.00" remaining="0.00" budget="0.00" 
            progressPercent={0}
          />
          <SpendCategory 
            iconName="car-outline" 
            title="Transport" 
            iconColor="#ef4444"
            spent="1,500.00" remaining="500.00" budget="2,000.00" 
            progressPercent={75} // 1500/2000 = 75%
          />
        </View>

        {/* See Analysis Breakdown Button */}
        <TouchableOpacity style={styles.breakdownButton}>
            <Text style={styles.breakdownButtonText}>See analysis breakdown</Text>
        </TouchableOpacity>
        
        {/* Chat bubble placeholder from the image */}
        <TouchableOpacity style={styles.chatBubble}>
            <Icon name="message-text-outline" size={24} color="#fff" />
        </TouchableOpacity>

      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#d90000" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="swap-horizontal" size={24} color="#a0a0a0" />
          <Text style={styles.navText}>Pay & Transfer...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cube-outline" size={24} color="#a0a0a0" />
          <Text style={styles.navText}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="credit-card-outline" size={24} color="#a0a0a0" />
          <Text style={styles.navText}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="dots-horizontal" size={24} color="#a0a0a0" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// --- Stylesheet ---

const styles = StyleSheet.create({
  // Global Dark Mode Styles
  safeArea: {
    flex: 1,
    backgroundColor: '#000', // Black background
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 120, // Increased space for the floating chat bubble
    backgroundColor: '#000',
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d90000', // OneBank Red
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginHorizontal: 10,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: 5,
    backgroundColor: '#d90000',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  
  // Naira Account Button
  nairaAccountButton: {
    backgroundColor: '#374151', // Darker gray for buttons
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  nairaAccountText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },

  // Account Card Styles
  accountCard: {
    backgroundColor: '#303f9f', // Dark blue background (Kept for contrast)
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 5,
  },
  accountNumber: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 5,
  },
  accountDetails: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  accountName: {
    color: '#fff',
    fontSize: 16,
    marginTop: 2,
  },
  seeAllButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  seeAllText: {
    color: '#d90000', // Red color
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardIconPlaceholder: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    opacity: 0.2,
  },

  // Quick Links Styles
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text for dark mode
    marginTop: 30,
    marginBottom: 15,
  },
  quickLinksGrid: {
    // Container for two rows
  },
  quickLinksRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  quickLinkContainer: {
    alignItems: 'center',
    width: '24%',
  },
  quickLinkIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  quickLinkText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#ccc', // Light gray text
  },

  // Special Offers Styles
  specialOffersScroll: {
    paddingBottom: 20,
  },
  offerBanner: {
    height: 150,
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  offerTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  offerDetails: {
    fontSize: 14,
    color: '#ccc',
  },
  offerAmount: {
    color: '#fff',
    fontWeight: 'bold',
  },
  offerBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 12,
  },

  // Spend Analysis Styles
  overdraftBanner: {
    backgroundColor: '#1f2937', // Dark Slate Gray
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
    position: 'relative',
  },
  overdraftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  overdraftUser: {
    color: '#fff',
    fontWeight: '600',
    flex: 1,
    fontSize: 12,
  },
  overdraftTime: {
    color: '#aaa',
    fontSize: 12,
  },
  overdraftTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  overdraftSubtitle: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 15,
  },
  overdraftButton: {
    backgroundColor: '#ef4444', // Red button
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  overdraftButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  spendList: {
    marginBottom: 20,
  },
  spendCategoryCard: {
    backgroundColor: '#1f2937', // Dark Slate Gray
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  spendCategoryMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  spendCategoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  spendIconWrapper: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  spendCategoryTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  spendCategoryRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  spendDataColumn: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  spendDataLarge: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  spendDataSmall: {
    color: '#aaa',
    fontSize: 12,
  },
  progressBarBackground: {
    height: 5,
    backgroundColor: '#374151',
    borderRadius: 2.5,
  },
  progressBarFill: {
    height: 5,
    borderRadius: 2.5,
  },
  breakdownButton: {
    backgroundColor: '#fff', // White button background
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  breakdownButtonText: {
    color: '#000', // Black text on white background
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Floating Chat Bubble
  chatBubble: {
    position: 'absolute',
    bottom: 100, // Above the bottom nav
    right: 25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3b82f6', // Blue color
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    elevation: 5, // Android shadow
  },

  // Bottom Navigation Styles
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#1f2937',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000', // Black background
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#a0a0a0',
  },
  navTextActive: {
    fontSize: 10,
    color: '#d90000', // OneBank Red
  },
});

export default App;