import streamlit as st
import pandas as pd
import cufflinks as cf
from sklearn.datasets import load_wine
import warnings
warnings.filterwarnings("ignore")

####### Load Dataset #####################

wine = load_wine()

wine_df = pd.DataFrame(data=wine.data, columns=wine.feature_names)

wine_df["WineType"] = [wine.target_names[t] for t in wine.target ]

st.set_page_config(layout="wide")

st.markdown("## Wine Dataset Analysis")   ## Main Title

################# Scatter Chart Logic #################

st.sidebar.markdown("### Scatter Chart: Explore Relationship Between Ingredients :")

ingredients = wine_df.drop(labels=["WineType"], axis=1).columns.tolist()
x_axis = st.sidebar.selectbox("X-Axis", ingredients)
y_axis = st.sidebar.selectbox("Y-Axis", ingredients, index=1)

if x_axis and y_axis:
    scatter_fig = wine_df.iplot(kind="scatter", x=x_axis, y=y_axis,
                    mode="markers",
                    categories="WineType",
                    asFigure=True, opacity=1.0,
                    xTitle=x_axis.replace("_"," ").capitalize(), yTitle=y_axis.replace("_"," ").capitalize(),
                    title="{} vs {}".format(x_axis.replace("_"," ").capitalize(), y_axis.replace("_"," ").capitalize()),
                    )




########## Bar Chart Logic ##################

st.sidebar.markdown("### Bar Chart: Average Ingredients Per Wine Type : ")

avg_wine_df = wine_df.groupby(by=["WineType"]).mean()

bar_axis = st.sidebar.multiselect(label="Bar Chart Ingredient", options=avg_wine_df.columns.tolist(), default=["alcohol","malic_acid"])

if bar_axis:
    bar_fig = avg_wine_df[bar_axis].iplot(kind="bar",
                        barmode="stack",
                        xTitle="Wine Type",
                        title="Distribution of Average Ingredients Per Wine Type",
                        asFigure=True,
                        opacity=1.0,
                        );
else:
    bar_fig = avg_wine_df[["alcohol"]].iplot(kind="bar",
                        barmode="stack",
                        xTitle="Wine Type",
                        title="Distribution of Average Alcohol Per Wine Type",
                        asFigure=True,
                        opacity=1.0,
                        );

################# Histogram Logic ########################

st.sidebar.markdown("### Histogram: Explore Distribution of Ingredients : ")

hist_axis = st.sidebar.multiselect(label="Histogram Ingredient", options=ingredients, default=["malic_acid"])
bins = st.sidebar.radio(label="Bins :", options=[10,20,30,40,50], index=1)

if hist_axis:
    hist_fig = wine_df.iplot(kind="hist",
                             keys=hist_axis,
                             xTitle="Ingredients",
                             bins=bins,
                             title="Distribution of Ingredients",
                             asFigure=True,
                             opacity=1.0
                            );
else:
    hist_fig = wine_df.iplot(kind="hist",
                             keys=["alcohol"],
                             xTitle="Alcohol",
                             bins=bins,
                             title="Distribution of Alcohol",
                             asFigure=True,
                             opacity=1.0
                            );


#################### Pie Chart Logic ##################################

wine_cnt = wine_df.groupby(by=["WineType"]).count()[['alcohol']].rename(columns={"alcohol":"Count"}).reset_index()

pie_fig = wine_cnt.iplot(kind="pie", labels="WineType", values="Count",
                         title="Wine Samples Distribution Per WineType",
                         hole=0.4,
                         asFigure=True)


##################### Layout Application ##################

container1 = st.container()
col1, col2 = st.columns(2)

with container1:
    with col1:
        scatter_fig
    with col2:
        bar_fig


container2 = st.container()
col3, col4 = st.columns(2)

with container2:
    with col3:
        hist_fig
    with col4:
        pie_fig