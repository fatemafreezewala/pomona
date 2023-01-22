import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Email from '../../assets/img/Restaurant/email.svg'
import globalStyle from '../../styles/globalStyle'
import colors from '../../constant/colors'
import fontFamily from '../../constant/fontFamily'
import Header from '../../components/Profile/Header'
const GetInTouch = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <Header onPress={()=>navigation.goBack()} title="Privacy Policy"></Header>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={[{backgroundColor:'#fff',width:'95%',padding:15,alignSelf:'center',borderRadius:15},globalStyle.mt10]}>
      <Text style={globalStyle.paragraph}>
      <Text style={styles.heading}>Privacy Policy</Text>{'\n'}
      Pomona Wellness, Inc. (“Company,” “we,” or “us”) respects your privacy and is committed to protecting it through this Privacy Policy.

This Privacy Policy governs your access to and use of www.pomonawellness.co, including any content, functionality and services offered on or through www.pomonawellness.co (the “Website”), or the Pomona App (the “App”), whether as a guest or a registered user.

When accessing the Website or App, the Company will learn certain information about you, both automatically and through voluntary actions you may take, during your visit. This policy applies to information we collect on the Website or App, and in email, text, or other electronic messages between you and the Website and/or App.

Please read the Privacy Policy carefully before you start to use the Website and/or App. By using the Website and/or App, or by clicking to accept or agree to the Terms of Use when this option is made available to you, you accept and agree to be bound and abide by the Privacy Policy. If you do not want to agree to the Privacy Policy, you must not access or use the Website and/or App.
{'\n'}{'\n'}
<Text style={styles.heading}>Children Under The Age Of 13</Text>
{'\n'}{'\n'}
Our Website and/or App is not intended for children under 13 years of age. No one under age 13 may provide any information to or on the Website and/or App. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Website and/or App, or on or through any of its features/register on the Website and/or App, make any purchases through the Website and/or App, use any of the interactive or public comment features of this Website and/or App, or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or user name you may use.

If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at info@pomonawellness.co.
{'\n'}{'\n'}
<Text style={styles.heading}>Information We Collect About You</Text>
{'\n'}{'\n'}
When you access the Website and/or App, the Company will learn certain information about you during your visit.

Information You Provide To Us. The Website and App provide various places for users to provide information. We collect information that users provide by filling out forms on the Website and/or App, communicating with us via contact forms, responding to surveys, search queries on our search feature, providing comments or other feedback, and providing information when ordering a product or service via the Website or App.

We use information you provide to us to deliver the requested product and/or service, to improve our overall performance, and to provide you with offers, promotions, and information.

Information We Collect Through Automatic Data Collection Technology. As you navigate through our Website or App, we may use automatic data collection technologies including Google Analytics to collect certain information about your equipment, browsing actions, and patterns or click and feature use. This will generally include information about your location, your traffic pattern through our website and or App, as shared by location services, and any communications between your computer, device, and our Website or App. Among other things, we will collect data about the type of computer you use, your Internet connection, your IP address, your operating system, and your browser type. On mobile devices, we receive information about the device you use to access the Service, including, internet protocol (“IP”) address, web browser type, operating system version, and information about your device. When you use the Service, we infer the general physical location of your device and the geographic regions our Users come from. For example, your IP address may indicate your general geographic region.

For App usage on the mobile device, to help us understand how you use the Service and to help us improve them, when you use the Service, we automatically receive information about your interactions with the Service, including information about your use of the App, such as time spent using the App, how you interact with elements of the App, the links you click, the interactions you have with the app, the feelings you update, and cards you create, save and update.

The information we collect automatically is used for statistical data and will not include personal information. We use this data to improve our Website, App and our service offerings. To the extent that you voluntarily provide personal information to us, our systems will associate the automatically collected information with your personal information.
{'\n'}{'\n'}
<Text style={styles.heading}>Use of Cookies And Pixels</Text>
{'\n'}{'\n'}
Similar to other commercial websites, our website utilizes a standard technology called “cookies” and server logs to collect information about how our site is used. Information gathered through cookies and server logs may include the date and time of visits, the pages viewed, time spent at our site, and the websites visited just before and just after our own, as well as your IP address.

A cookie is a very small text document, which often includes an anonymous unique identifier. When you visit a website, that site’s computer asks your computer for permission to store this file in a part of your hard drive specifically designated for cookies. Each website can send its own cookie to your browser if your browser’s preferences allow it, but (to protect your privacy) your browser only permits a website to access the cookies it has already sent to you, not the cookies sent to you by other sites.

The Company reserves the right to use technological equivalents of cookies, including social media pixels. These pixels allow social media sites to track visitors to outside websites so as to tailor advertising messages users see while visiting that social media website. The Company reserves the right to use these pixels in compliance with the policies of the various social media sites.​

California law requires us to let you know whether we honor “Do Not Track” requests set by your browser. Unfortunately, there is no industry or legal standard (or easy technological solution) about how to handle these responses. Thus, we don’t currently respond to Do Not Track signals at this time.
{'\n'}{'\n'}
<Text style={styles.heading}>Third Party Use Of Cookies</Text>
{'\n'}{'\n'}
Some content or applications, including advertisements, on the Website and/or App are served by third-parties, including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our website or App. The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different websites and other online services. They may use this information to provide you with interest-based (behavioral) advertising or other targeted content.

We do not control these third parties’ tracking technologies or how they may be used. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly.
{'\n'}{'\n'}
<Text style={styles.heading}></Text>Email Information
{'\n'}{'\n'}
If you choose to correspond with us through email, we may retain the content of your email messages together with your email address and our responses. We provide the same protections for these electronic communications that we employ in the maintenance of information received online, mail, and telephone. This also applies when you register for our website, sign up through any of our forms using your email address or make a purchase on this site. For further information see the email policies below.
{'\n'}{'\n'}
<Text style={styles.heading}>Email Policies</Text>
{'\n'}{'\n'}
We are committed to keeping your e-mail address confidential. We do not sell, rent, or lease our subscription lists to third parties, and will not disclose your email address to any third parties except as allowed in the section titled Disclosure of Your Information.

We will maintain the information you send via e-mail in accordance with applicable federal law.

In compliance with the CAN-SPAM Act, all e-mails sent from our organization will clearly state who the e-mail is from and provide clear information on how to contact the sender. In addition, all e-mail messages will also contain concise information on how to remove yourself from our mailing list so that you receive no further e-mail communication from us.

Our emails provide users the opportunity to opt-out of receiving communications from us and our partners by reading the unsubscribe instructions located at the bottom of any e-mail they receive from us at anytime.

Users who no longer wish to receive our newsletter or promotional materials may opt-out of receiving these communications by clicking on the unsubscribe link in the e-mail.
{'\n'}{'\n'}
<Text style={styles.heading}>Mobile App User Feedback</Text>
{'\n'}{'\n'}
We receive information you provide if you share feedback about the app functionality and/or leverage the communication features in the app.
{'\n'}{'\n'}
<Text style={styles.heading}>How We Use the Information We Collect</Text>
{'\n'}{'\n'}
We use the information we collect:
{'\n'}
{'\n'}* To provide, maintain, improve, and enhance the Service; 
{'\n'}* To communicate with you, provide you with updates and other information relating to the Service, provide information that you request, respond to comments and questions, and otherwise provide customer support; 
{'\n'}* To understand and analyze how you use the Service and develop new products, services, and features; 
{'\n'}* For marketing purposes, such as communicating updates about the Service that may be of interest to you; 
{'\n'}* To de-identify and/or aggregate information collected through the Service for our business purposes; 
{'\n'}* To facilitate transactions and payments;
{'\n'}* To find and prevent fraud, and respond to trust and safety issues that may arise; 
{'\n'}* For compliance purposes, including enforcing our Terms of Service or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency; and 
{'\n'}* For other purposes for which we provide specific notice at the time the information is collected.​
{'\n'}{'\n'}
<Text style={styles.heading}>How And Why We Collect Information</Text>
{'\n'}{'\n'}
The Company collects your information in order to record and support your participation in the activities you select. If you register to download a book or resources, sign up for our newsletter, and/or purchase a product from us, we collect your information. We use this information to track your preferences and to keep you informed about the products and services you have selected to receive and any related products and/or services. As a visitor to this Website, you can engage in most activities without providing any personal information. It is only when you seek to download resources and/or register for services that you are required to provide information. All users of the App must register for the app and information will be collected in accordance with the policies listed above and in our terms and conditions.

If you are outside the European Union and opt to receive any free resources, participate in any free training programs, register for a webinar, register for a live event, register for a seminar, or purchase any products sold by the Company on this Website, we will automatically enroll ​you to receive our free email newsletter. If you do not wish to receive this newsletter, you can unsubscribe anytime. We include an “unsubscribe” link at the bottom of every email we send. If you ever have trouble unsubscribing, you can send an email to info@pomonawellness.co requesting to unsubscribe from future emails.

If you are in the European Union and opt to receive any free resources, participate in any free training programs, register for a webinar, register for a live event, register for a seminar, or purchase any products sold by the Company on this Website, we will only enroll ​you to receive our free email newsletter if you affirmatively consent to it. If you do not wish to receive this newsletter, you can unsubscribe anytime. We include an “unsubscribe” link at the bottom of every email we send. If you ever have trouble unsubscribing, you can send an email to info@pomonawellness.co requesting to unsubscribe from future emails.

How Do We Use the Information That You Provide to Us?

We use personal information for purposes of presenting our Website and its contents to you, providing you with information, providing you with offers for products and services, providing you with information about your subscriptions and products, carrying out any contract between you and the Company, administering our business activities, providing customer service, and making available other items and services to our customers and prospective customers.

From time-to-time, we may use the information you provide to us to make you offers to purchase products and services provided by third parties in exchange for a commission to be paid to us by such third parties. Should you opt to take part in such promotions, the third parties will receive your information.

From time-to-time, we may use the information you provide to us to display advertisements to you that are tailored to your personal characteristics, interests, and activities.

We use analytics services such as Google Analytics to collect and process certain analytics data. These services may also collect information about your use of other websites, apps, and online resources. You can learn about Google’s practices by going to https://www.google.com/policies/privacy/partners/, and opt-out of them by downloading the Google Analytics opt-out browser add-on, available at https://tools.google.com/dlpage/gaoptout.
{'\n'}{'\n'}
<Text style={styles.heading}>Disclosure Of Your Information</Text>
{'\n'}{'\n'}
As a general rule, we do not sell, rent, lease or otherwise transfer any information collected whether automatically or through your voluntary action.

We may disclose your personal information to our subsidiaries, affiliates, and service providers for the purpose of providing our services to you.

We may disclose your personal information to a third party, including a lawyer or collection agency, when necessary to enforce our terms of service or any other agreement between you and the Company.

We may provide your information to any successor in interest in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company’s assets and/or business.

We may disclose information when legally compelled to do so, in other words, when we, in good faith, believe that the law requires it or for the protection of our legal rights or when compelled by a court or other governmental entity to do so.


{'\n'}{'\n'}
<Text style={styles.heading}>How Do We Protect Your Information and Secure Information Transmissions?</Text>
{'\n'}{'\n'}
We employ commercially reasonable methods to ensure the security of the information you provide to us and the information we collect automatically. This includes using standard security protocols and working only with reputable third-party vendors.

Email is not recognized as a secure medium of communication. For this reason, we request that you do not send private information to us by email. However, doing so is allowed, but at your own risk. Some of the information you may enter on our website may be transmitted securely via a secure medium known as Secure Sockets Layer, or SSL. Credit Card information and other sensitive information is never transmitted via email.

The Company may use software programs to create summary statistics, which are used for such purposes as assessing the number of visitors to the different sections of our site, what information is of most and least interest, determining technical design specifications, and identifying system performance or problem areas.

For site security purposes and to ensure that this service remains available to all users, the Company uses software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.
{'\n'}{'\n'}
<Text style={styles.heading}>Policy Changes</Text>
{'\n'}{'\n'}
It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users’ personal information, we will notify you by email to the email address specified in your account and/or through a notice on the Website home page, or in a notification in the App. The date the privacy policy was last revised is identified at the bottom of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and/or App, and this privacy policy to check for any changes.
{'\n'}{'\n'}
<Text style={styles.heading}>Visitors’ GDPR Rights</Text>
{'\n'}{'\n'}
If you are within the European Union, you are entitled to certain information and have certain rights under the General Data Protection Regulation. Those rights include:

We will retain the any information you choose to provide to us until the earlier of: (a) you asking us to delete the information, (b) our decision to cease using our existing data providers, or (c) the Company decides that the value in retaining the data is outweighed by the costs of retaining it.

You have the right to request access to your data that the Company stores and the rights to either rectify or erase your personal data.

You have the right to seek restrictions on the processing of your data.

You have the right to object to the processing of your data and the right to the portability of your data.

To the extent that you provided consent to the Company’s processing of your personal data, you have the right to withdraw that consent at any time, without affecting the lawfulness of processing based upon consent that occurred prior to your withdrawal of consent.

You have the right to lodge a complaint with a supervisory authority that has jurisdiction over issues related to the General Data Protection Regulation.

We require only the information that is reasonably required to enter into a contract with you. We will not require you to provide consent for any unnecessary processing as a condition of entering into a contract with us.
      </Text>
      <View style={[globalStyle.rowSpaceBetween,globalStyle.mt5]}>
      <View style={globalStyle.rowCenter}>
            <Email></Email>
            <Text style={[styles.desp,globalStyle.ml5]}>Email</Text>
          </View>
        <Text style={[styles.desp]}>support@pomonawellness.co</Text>
      </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default GetInTouch

const styles = StyleSheet.create({
  desp:{
    color:colors.black,
    fontFamily:fontFamily.Medium,
    fontSize:13,
    lineHeight:18,
    marginTop:10
  },
  heading:{
    fontFamily:fontFamily.Medium
  }
})