import streamlit as st
import numpy as np
import pandas as pd
import cufflinks as cf
from sklearn.datasets import load_wine
import warnings
warnings.filterwarnings("ignore")

df = pd.read_csv(r"C:\Users\sahas\OneDrive\Documents\visual studio code\UBA\train.csv")

st.set_page_config(layout="wide")

st.markdown("## Wine Dataset Analysis") 

st.sidebar.markdown("### Scatter Chart: Explore Relationship Between Ingredients :")

ingredients = df.select_dtypes(include=['object']).columns.tolist()
print(ingredients)
x_axis = st.sidebar.selectbox("X-Axis", ingredients)
y_axis = st.sidebar.selectbox("Y-Axis", ingredients, index=1)

if x_axis and y_axis:
    scatter_fig = df.iplot(kind="scatter", x=x_axis, y=y_axis,
                    mode="markers",
                    categories="BldgType",
                    asFigure=True, opacity=1.0
                    )


