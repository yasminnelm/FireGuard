# FIREGUARD Web App

Welcome to the FIREGUARD Web App README! This application is designed to help you track wildfires in near real-time using an interactive map and predict forest wildfires using Python. Below, you'll find information on how to get started and use the app.

# Getting Started
Our project empowers communities to actively monitor and report fires using technology and publicly available data. We enhance data accessibility for various stakeholders and focus on using data insights, particularly in understanding aerosol chemistry in different fire types, to predict and prevent wildfires effectively. This collaborative approach aims to protect lives, property, and natural resources from escalating fire threats.


# BACKGROUND:

The escalating frequency and severity of wildfires present a pressing challenge for communities and natural resource management. To address this issue, our project focuses on leveraging technology and publicly available data, such as NASA's satellite-derived active fire data, to empower local communities and improve fire management.
As wildfires continue to increase in frequency, number, and size, it has become imperative to expand the utilization of such data beyond traditional users. We aim to bridge this gap by creating innovative solutions that enable diverse stakeholder groups, including local residents, emergency responders, and policymakers, to access, understand, and utilize critical fire-related information effectively.
 #### Early Detection and Prevention:
 Wildfires and agricultural burns incur substantial economic costs. Our project seeks to mitigate these costs by better predicting fire occurrences and detecting early warning signs. Leveraging historical and informative data from NASA, we aim to develop predictive models that can lead to early intervention and more effective fire management.op user-friendly tools and resources that enable local communities to actively participate in fire monitoring, reporting, and response efforts. This approach fosters a sense of ownership and ensures rapid reactions to fire threats.
 #### Data Accessibility:
 Enhance the distribution of vital fire and natural resource data, making it readily accessible to a wider range of stakeholders. This includes creating user-friendly interface and data-sharing platform.
 #### Data collection:
In the initial phase of our project, we focus on collecting vital data from NASA's space website, which serves as a rich source of information on active fires and related environmental factors. NASA's satellite-derived active fire data provide invaluable insights into the location, intensity, and dynamics of fires on a global scale. This data includes critical details such as fire hotspots, burn scars, and aerosol emissions, which are essential for understanding the behavior of wildfires and agricultural burns. By tapping into NASA's extensive satellite monitoring capabilities, we gain access to real-time and historical data, enabling us to track fire trends, assess their impact, and develop predictive models. This data collection forms the cornerstone of our project, empowering us to make informed decisions and create innovative solutions for effective fire management and community engagement.
![image](https://github.com/LahnoukiAicha/FireGuard/assets/129806734/7ff2f6da-7337-4f8e-8394-49578432b444)
![image](https://github.com/LahnoukiAicha/FireGuard/assets/129806734/55262932-3763-4672-aa4a-723059d234de)


Fires burning across the Pacific Northwest, USA, on 25 August 2015. This natural-color satellite image was collected by the Moderate Resolution Imaging Spectroradiometer (MODIS) aboard the Aqua satellite. Actively burning areas, detected by MODIS’s thermal bands, are outlined in red. National Aeronautics and Space Administration image courtesy of Jeff Schmaltz, MODIS Rapid Response Team
Based on the data collected,we have developed a dynamic and informative map visualization tool.
We've created a map that offers a comprehensive overview of fire hotspots, their intensity, and their geographical distribution. This visualization not only aids in the swift detection of fires but also provides essential contextual information, such as the proximity of communities and natural resources to these fire-prone areas.
Plateform Overview and Functionality:
The Wildfire application offers a comprehensive set of features aimed at enhancing fire monitoring, reporting, and prediction. Here's a more detailed breakdown of each of these functionalities:
Near-real-Time Map Visualization:
 This feature provides users with a dynamic map that updates in near-real-time to display the current status of wildfires. It highlights the locations of regions affected by fires and offers various layers of information, such as fire perimeters, hotspots, and evacuation zones. Users can zoom in to see specific details and view historical fire data, aiding in situational awareness.
 ####Report Fire: 
When a user encounters a fire, the "Report Fire" option becomes invaluable. By pressing a designated button, users can access a detailed form where they can enter critical information about the fire. This may include the fire's exact location, its size, observed behavior, and any potential hazards in the vicinity. This information is then relayed to relevant authorities for immediate action. 
 #### Fire Prediction: 
The predictive feature of the application allows users to input environmental data such as humidity levels, oxygen content, and temperature for a specific area. Using this data, the application employs advanced algorithms to assess the risk of a fire outbreak in that area. It also calculates the potential severity of such an event. Users receive a percentage indicating the likelihood of a fire and its potential impact, aiding in early warning and preparedness. By employing machine learning algorithms, this model can analyze a combination of input factors and produce a probability score indicating the likelihood of a fire. This predictive capability is vital for ensuring the safety of forests, the environment, and the communities living in fire-prone areas. It allows for timely responses and resource allocation, ultimately reducing the impact of wildfires and helping to prevent catastrophic events. 
 ####Community Engagement: 
The application may offer a community engagement component, allowing users to share information and observations about fires, as well as provide support to affected individuals or communities. This fosters a sense of solidarity and can facilitate coordinated responses during fire emergencies.

# Use of Artificial Intelligence:

In this application, machine learning plays a pivotal role in the predictive model. The machine learning model, loaded and utilized within the 'predict' route, employs a trained algorithm to assess the probability of  fire occurring based on input data. 
You can find the code repo to the Flask app here : https://github.com/LahnoukiAicha/ForestPrediction.git

Here's a paragraph explaining the usage of machine learning in the prediction part of our application;

"The predictive component of this application harnesses the power of machine learning to evaluate the risk of fires. The model, loaded upon initiation, has been trained on a dataset comprising environmental variables such as humidity, oxygen levels, and temperature. Using advanced machine learning algorithms, it can recognize intricate patterns and relationships within this data. When a user submits specific environmental conditions, the model processes this information and returns a probability score that quantifies the likelihood of a fire outbreak. If the probability surpasses a predefined threshold, the model alerts the user, indicating that the forest is at risk. This ability to leverage machine learning for predictive analysis is instrumental in enabling timely responses and informed decisions, contributing to enhanced forest fire prevention and safety."

## Prerequisites

Before running the FIREGUARD Web App, ensure you have the following installed:

- Node.js and npm (for the React.js frontend)
- Python 3 (for the Flask backend and predictive analytics)

## Installation

1. Clone the FIREGUARD repository:
git clone https://github.com/yasminnelm/fireguard.git

2. Navigate to the project directory:

cd fireguard

3. Install the React.js frontend dependencies:

npm install

The backend should now be running and serving the React.js frontend.

3. Access the FIREGUARD Web App through your browser at `http://localhost:3000` (or the specified port).



