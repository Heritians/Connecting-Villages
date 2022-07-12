import streamlit as st
import pandas as pd
import plotly.express as px
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import plotly.figure_factory as ff
import seaborn as sns

df = pd.read_csv(r"C:\Users\sahas\OneDrive\Documents\visual studio code\UBA\train.csv")

st.title(" Village Statistics Visualiser ")

option = st.sidebar.selectbox(
    'Select an Option',
    ('Categorical Columns', 'Numerical Columns','Null Distribution','Countplot','Scatterplot','Feature Relationship','In-Depth Correlation')
)

#st.write('Displaying :', option)

if option=='Categorical Columns':

    st.info("Categorical Columns in the dataset")
    categorical=df[df.select_dtypes(include=['object']).columns.tolist()]
    categorical

if option=='Numerical Columns':
    st.info("Numerical Columns in the dataset")
    df[df.select_dtypes(exclude=['object']).columns.tolist()]

if option=='Null Distribution':
    df1 = pd.DataFrame(df.isna().sum().sort_values(ascending=False))
    df1['columns']=df1.index
    df1['count']=df1.iloc[:,:-1]
    df1.reset_index(drop=True, inplace=True)
    df1 = df1.drop(df1.columns[[0]],axis = 1)
    df1=df1.head(15)
    fig = plt.figure(figsize=(12, 6))
    ax = sns.barplot(y='columns',x='count',data=df1)
    ax.bar_label(ax.containers[0], label_type='edge')
    st.pyplot(fig)

categorical = df[df.select_dtypes(include=['object']).columns.tolist()]
l = categorical.columns.tolist()
l.append("All")
l = sorted(l)

if option=='Countplot':

    fig=plt.figure(figsize=(12,6))
    col=st.selectbox("Select Column",l)

    if col!="All":
        ax = sns.countplot(x=col,data=categorical)
        ax.bar_label(ax.containers[0], label_type='edge')
        plt.xticks(rotation=90)
        st.pyplot(fig)

    else:
        fig = plt.figure(figsize=(30,35))
        for index in range(len(categorical.columns)):
            plt.subplot(9,5,index+1)
            ax = sns.countplot(x=categorical.iloc[:,index], data=categorical.dropna())
            ax.bar_label(ax.containers[0], label_type='edge')
            plt.xticks(rotation=90)
        fig.tight_layout(pad=1.2)
        st.pyplot(fig)
        

numeric = df.select_dtypes(exclude=['object']).copy()
n = numeric.columns.tolist()
n.append("All")
n = sorted(n)

## On the y axis we have taken SalePrice this needs to change for other datasets

if option=='Scatterplot':
    
    st.info('Scatter plots are the graphs that present the relationship between two variables in a data-set.')

    fig=plt.figure(figsize=(12,6))
    col=st.selectbox("Select Column",n)

    if col!="All":
        
        sns.scatterplot(x=col,y="SalePrice",hue='SaleCondition',data=df,palette="bright")
        plt.xticks(rotation=90)
        st.pyplot(fig)

    else:
        fig = plt.figure(figsize=(15,15))
        for index in range(len(n)):
            plt.subplot(10,5,index+1)
            sns.scatterplot(x=df.iloc[:,index], y='SalePrice',data=df,palette="bright")
            plt.xticks(rotation=90)
        fig.tight_layout(pad=1.0)
        st.pyplot(fig)

if option=='Feature Relationship':

    corr = df.drop('SalePrice', axis=1).corr() # We already examined SalePrice correlations
    fig = plt.figure(figsize=(15, 12))

    sns.heatmap(corr[(corr >= 0.5) | (corr <= -0.4)], 
                cmap='viridis', vmax=1.0, vmin=-1.0, linewidths=0.1,
                annot=True, annot_kws={"size": 8}, square=True)

    st.pyplot(fig)
    

if option=="In-Depth Correlation":

    col=st.selectbox("Select Column",n)
    fig, ax = plt.subplots(3,1, figsize = (20,8))
    sns.stripplot(data=numeric, x = col, y='SalePrice', ax = ax[1])
    sns.violinplot(data=numeric, x = col, y='SalePrice', ax = ax[2])
    sns.boxplot(data=numeric, x = col, y='SalePrice', ax = ax[3])
    st.pyplot(fig)