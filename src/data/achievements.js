export const achievements = [
  {
    groupName: '课题一',
    output: [
      {
        researchDirection: '因果发现',
        papers: [
          {
            title: 'Causal Discovery with Latent Confounders Based on Higher-Order Cumulants',
            author: 'Ruichu Cai, Zhiyi Huang, Wei Chen, Zhifeng Hao, Kun Zhang',
            abstract:
              'Causal discovery with latent confounders is an important but challenging task in many scientific areas. Despite the success of some overcomplete independent component analysis (OICA) based methods in certain domains, they are computationally expensive and can get stuck in local optima. By using higher-order cumulants we derive closed-form solutions for OICA under One-Latent-Component structure, extend the idea to Multi-Latent-Component cases, and propose a practical asymptotically correct algorithm. Experimental results illustrate the effectiveness of the proposed method.',
            intro_cn:
              '针对传统方法容易陷入局部最优、且缺乏隐混淆可识别性理论的问题，利用高阶累积量揭示隐变量与观测变量之间的内在联系，建立了具有解析解、可检验的隐混淆因果发现理论与方法。',
            date: '2023/7/23',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn1-1.png',
            paperUrl: 'https://arxiv.org/pdf/2305.19582',
            link: 'http://mp.weixin.qq.com/s?__biz=MzAwMDcxMDcyMw==&mid=2649695850&idx=1&sn=5e9a790a4f30e70557300ef47212b897&scene=19#wechat_redirect',
          },
          {
            title: 'Identification of Causal Structure with Latent Variables Based on Higher Order Cumulants',
            author: 'Wei Chen, Zhiyi Huang, Ruichu Cai, Zhifeng Hao, Kun Zhang',
            abstract:
              'Causal discovery with latent variables is challenging. We show that certain structures where two observed variables are influenced by one latent variable can be identified using higher-order cumulants of non-Gaussian data. Leveraging these cumulants, we provide analytical solutions to estimate causal coefficients (or their ratios) and introduce criteria to detect causal edges and directions. Experiments demonstrate the effectiveness of the proposed approach.',
            intro_cn:
              '针对含隐变量场景下因果方向难以识别的问题，提出了基于高阶累积量的因果结构识别方法，给出了因果系数及其比值的解析估计，并实现因果边与方向的有效检测。',
            date: '2024/3/24',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn1-2.png',
            paperUrl: 'https://arxiv.org/pdf/2312.11934',
          },
          {
            title: 'Granger causal representation learning for groups of time series',
            author: 'Ruichu Cai, Yunjin Wu, Xiaokai Huang, Wei Chen, Tom ZJ Fu, Zhifeng Hao',
            abstract:
              'Discovering causality from multivariate time series is an important but challenging problem.                        Most existing methods focus on estimating the Granger causal structures among multivariate time series,                       while ignoring the prior knowledge of these time series,                        e.g., the group of the time series.Focusing on discovering the Granger causal structures among groups of time series,                        we propose a Granger causal representation learning method to solve this problem.First, we use the multiset canonical correlation analysis method to                        learn the Granger causal representation of each group of time series.Then, we model the Granger causal relationships among the learned Granger causal representations using a recurrent neural network with temporal information.Finally, we formulate the above two stages into one unified optimization problem,which is efficiently solved using the augmented Lagrangian method.We conduct extensive experiments on synthetic                        and real - world datasets to validate the correctness and effectiveness of the proposed method.',
            intro_cn:
              '针对现有多变量时间序列因果发现方法忽视时间序列组结构先验、难以学习组间Granger因果关系的问题，提出了面向时间序列组的Granger因果表征学习方法。该方法结合多集合典型相关分析与循环神经网络，在统一优化框架下同时学习组级因果表征与组间时序因果结构。',
            date: '2024/4/1',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn1-3.png',
            paperUrl: 'https://www.sciengine.com/cfs/files/pdfs/view/1674-733X/712188F9B98346BC99DAC8DBFD8A6AA1.pdf',
            link: 'http://mp.weixin.qq.com/s?__biz=MzAwMDcxMDcyMw==&mid=2649695734&idx=1&sn=44497f4628fb11b5ab332d25c1e71172&scene=19#wechat_redirect',
          },
          {
            title: 'Learning Discrete Latent Variable Structures with Tensor Rank Conditions',
            author: 'Zhengming Chen, Ruichu Cai, Feng Xie, Jie Qiao, Anpeng Wu, Zijian Li, Zhifeng Hao, Kun Zhang',
            abstract:
              "Unobserved discrete data are common in science; learning the causal structure among latent discrete variables is important. We propose a tensor-rank condition on contingency tables that allows locating latent variables by probing ranks on different observed variable sets, and provide identification algorithms under certain structural assumptions. Simulations verify the method's effectiveness and extend the identification boundary for causal discovery with discrete latent variables.",
            intro_cn:
              '针对离散数据的隐表征因果结构识别理论缺失问题，揭示了隐表征与概率张量秩的内在联系，提出基于张量秩分解理论的因果表征学习识别方法，破解了离散数据隐因果表征识别难题。',
            date: '2024/9/26',
            status: 'Accepted',
            status_color: 'primary',
            imgUrl: 'learn1-4.png',
            paperUrl: 'https://arxiv.org/pdf/2406.07020',
          },
          {
            title: 'Testing Conditional Independence Between Latent Variables by Independence Residuals',
            author: 'Zhengming Chen, Jie Qiao, Feng Xie, Ruichu Cai, Zhifeng Hao, Keli Zhang',
            abstract:
              'We propose AReCI, an auxiliary regression-based conditional independence test for latent variables under linear causal models. We derive theoretical guarantees covering Gaussian and non-Gaussian data, show partial correlation as a special case, and build a causal discovery method using AReCI; experiments on synthetic and real data demonstrate its effectiveness.',
            intro_cn:
              '针对传统方法依赖先验分布假设、难以准确推断隐表征间因果关系的问题，提出了隐因果表征间的条件独立性检验方法，破解了隐因果表征间的因果方向识别难题。',
            date: '2024/2/28',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn1-5.png',
            paperUrl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10453288',
            link: 'http://mp.weixin.qq.com/s?__biz=MzAwMDcxMDcyMw==&mid=2649696412&idx=1&sn=61329854b031fb8d105178a53724ca40&scene=19#wechat_redirect',
          },
          {
            title: 'Identification of Causal Structure in the Presence of Missing Data with Additive Noise Model',
            author: 'Jie Qiao, Zhengming Chen, Jianhua Yu, Ruichu Cai, Zhifeng Hao',
            abstract:
              'We study identifiability of causal structure under additive noise models when data contain missingness, including self-masking mechanisms. We provide sufficient and necessary conditions for identifying causal directions, extend identifiability results to weak self-masking cases, and propose a practical algorithm to learn the causal skeleton and directions; experiments validate its effectiveness.',
            intro_cn:
              '针对现有因果推理方法依赖无自屏蔽假设的问题，提出了基于加性噪声模型扩展可识别性范围的方法，给出了因果方向充要条件并设计了相应的因果发现算法。',
            date: '2024/3/24',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn1-6.png',
            paperUrl: 'https://arxiv.org/pdf/2312.12206',
          },
          {
            title: 'Individual Causal Structure Learning from Population Data',
            author: 'Wei Chen, Xiaokai Huang, Zijian Li, Ruichu Cai, Zhiyi Huang, Zhifeng Hao',
            abstract:
              "We propose ILAM (Individual Linear Acyclic Model) to learn each individual's causal structure from population data by modeling shared environment variables as latent factors. We derive identifiability conditions (including non-Gaussian cases and variance diversity scenarios) and introduce a learning algorithm based on Share Independence Component Analysis; experiments confirm the method's correctness with small per-individual sample sizes.",
            intro_cn:
              '针对跨媒体数据中个体因果结构学习受限于单一个体样本量不足、难以有效利用群体共享信息的问题，提出了基于个体线性无环模型和共享独立成分分析技术的个体因果结构学习方法。',
            date: '2024/4/17',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn1-7.png',
            paperUrl: 'https://www.ijcai.org/proceedings/2024/0786.pdf',
          },
          {
            title: 'Some General Identifcation Results for Linear Latent Hierarchical Causal Structure',
            author: 'Zhengming Chen, Feng Xie, Jie Qiao, Zhifeng Hao, Ruichu Cai',
            abstract:
              'We relax common restrictive assumptions (tree structure, absence of certain motifs, and noise constraints) and study identifiability of hierarchical latent causal structures from measured variables using second-order statistics. We show identifiability up to Markov equivalence classes and further identifiability under partial non-Gaussianity, and provide an algorithm with experimental validation.',
            intro_cn:
              '针对传统方法结构假设强、受限于树等特定层次结构的问题，提出了更加一般化条件下的分层因果网络学习方法，突破了现有分层因果网络的“树状”约束和非高斯假设。',
            date: '2023/8/25',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn1-8.png',
            paperUrl: 'https://www.ijcai.org/proceedings/2023/0397.pdf',
            link: 'http://mp.weixin.qq.com/s?__biz=MzAwMDcxMDcyMw==&mid=2649695330&idx=1&sn=601b6988747e7cd559353bb3cd10f3ef&scene=19#wechat_redirect',
          },
          {
            title: 'Temporal latent variable structural causal model for causal discovery under external interferences',
            author: 'Ruichu Cai, Xiaokai Huang, Wei Chen, Zijian Li, Zhifeng Hao',
            abstract:
              'Inferring causal relationships from observed data is an important task, yet it becomes challenging when the data is subject to various external interferences. Most of these interferences are the additional effects of external factors on observed variables. Since these external factors are often unknown, we introduce latent variables to represent these unobserved factors that affect the observed data. Specifically, to capture the causal strength and adjacency information, we propose a new temporal latent variable structural causal model, incorporating causal strength and adjacency coefficients that represent the causal relationships between variables. Considering that expert knowledge can provide information about unknown interferences in certain scenarios, we develop a method that facilitates the incorporation of prior knowledge into parameters learning based on Variational Inference, to guide the model estimation. Experimental results demonstrate the stability and accuracy of our proposed method.',
            intro_cn:
              '针对外部干预导致时序因果发现方法出现虚假因果关系的问题，提出了一种面向外部干扰场景的时序隐变量结构因果模型学习方法。',
            date: '',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn1-9.png',
            paperUrl: 'https://www.sciencedirect.com/science/article/pii/S0925231225009531?via%3Dihub',
          },
          {
            title: '基于增强条件独立性检验的鲁棒因果发现算法',
            author: '郝志峰,汪菲霞, 陈正鸣, 乔杰, 蔡瑞初',
            abstract:
              '本文提出一种增强的条件独立性检验方法，并基于该检验设计启发式结构学习算法，通过抑制无关噪声并结合得分优化能够在有限样本和高方差节点场景下更准确地恢复因果结构。仿真、贝叶斯网络和真实数据实验显示所提方法在F1和结构汉明距离（SHD）上均有显著提升。',
            intro_cn:
              '针对传统因果方法在高方差变量数据场景下容易失效的问题，提出了基于增强条件独立性检验与启发式搜索的鲁棒因果发现算法，实现了高方差变量场景下因果结构的稳定学习。',
            date: '2024/12/26',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn1-10.png',
            paperUrl: 'https://jos.org.cn/jos/article/pdf/7261',
          },
        ],
        patents: [
          {
            title: '基于可识别变分自编码器的因果表征的知识追踪方法',
            author: '蔡瑞初, 潘舒怡, 詹培林, 陈薇, 陈炳丰',
            abstract: '',
            intro_cn: '提出了基于可识别变分自编码器的因果表征知识追踪方法，提高了知识追踪效果。',
            date: '2025/09/15',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '广东工业大学',
            relatedResearchContent: '1.2',
          },
          {
            title: '一种面向智能制造的因果驱动生产系统建模与无偏策略优化方法',
            author: '蔡瑞初, 梁泽丰, 乔杰',
            abstract: '',
            intro_cn: '提出了一种面向智能制造的因果驱动生产系统建模与无偏策略优化方法，实现精准的因果发现。',
            date: '2025/10/13',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '广东工业大学',
            relatedResearchContent: '1.2',
          },
          {
            title: '一种面向无线网络性能指标的因果发现方法及系统',
            author: '陈薇, 彭琳钧, 黄智毅, 蔡瑞初, 郝志峰, 陈炳丰',
            abstract: '',
            intro_cn: '提出了一种面向无线网络性能指标的因果发现方法及系统，为网络故障检测提供根因分析指导。',
            date: '2024/10/12',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '广东工业大学',
            relatedResearchContent: '1.2',
          },
          {
            title: '一种网络用户购物行为因果分析方法及系统',
            author: '',
            abstract: '',
            intro_cn: '提出了一种网络用户购物行为因果分析方法，实现跨媒体数据的因果推理。',
            date: '2025/04/22',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '广东工业大学',
            relatedResearchContent: '1.2',
          },
        ],
      },
      {
        researchDirection: '因果效应估计',
        papers: [
          {
            title: 'Doubly Robust Causal Effect Estimation under Networked Interference via Targeted Learning',
            author: 'Weilin Chen, Ruichu Cai, Zeqin Yang, Jie Qiao, Yuguang Yan, Zijian Li, Zhifeng Hao',
            abstract:
              'Causal effect estimation under networked interference is an important but challenging problem. Available parametric methods are limited in their model space, while previous semiparametric methods, e.g., leveraging neural networks to fit only one single nuisance function, may still encounter misspecification problems under networked interference without appropriate assumptions on the data generation process. To mitigate bias stemming from misspecification, we propose a novel doubly robust causal effect estimator under networked interference, by adapting the targeted learning technique to the training of neural networks. Specifically, we generalize the targeted learning technique into the networked interference setting and establish the condition under which an estimator achieves double robustness. Based on the condition, we devise an end-to-end causal effect estimator by transforming the identified theoretical condition into a targeted loss. Moreover, we provide a theoretical analysis of our designed estimator, revealing a faster convergence rate compared to a single nuisance model. Extensive experimental results on two real-world networks with semisynthetic data demonstrate the effectiveness of our proposed estimators.',
            intro_cn:
              '针对网络效应估计方法依赖模型假设、容易出现模型错指的问题，提出了基于目标学习的双重稳健网络效应估计方法。',
            date: '2024/5/2',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn12-1.png',
            paperUrl: 'https://arxiv.org/pdf/2405.03342',
            link: 'http://mp.weixin.qq.com/s?__biz=MzAwMDcxMDcyMw==&mid=2649696526&idx=1&sn=0f604a703fd77d3f2ad07dfe601c27c0&scene=19#wechat_redirect',
          },
          {
            title: 'Reducing Balancing Error for Causal Inference via Optimal Transport',
            author: 'Yuguang Yan, Hao Zhou, Zeqin Yang, Weilin Chen, Ruichu Cai, Zhifeng Hao',
            abstract:
              'Most studies on causal inference tackle the issue of confounding bias by reducing the distribution shift between the control and treated groups. However, it remains an open question to adopt an appropriate metric for distribution shift in practice. In this paper, we define a generic balancing error on reweighted samples to characterize the confounding bias, and study the connection between the balancing error and the Wasserstein discrepancy derived from the theory of optimal transport. We not only regard the Wasserstein discrepancy as the metric of distribution shift, but also explore the association between the balancing error and the underlying cost function involved in the Wasserstein discrepancy. Motivated by this, we propose to reduce the balancing error under the framework of optimal transport with learnable marginal distributions and the cost function, which is implemented by jointly learning weights and representations associated with factual outcomes. The experiments on both synthetic and real-world datasets demonstrate the effectiveness of our proposed method.',
            intro_cn:
              '针对现有表因果效应估计方法高度依赖具体度量的问题，提出了基于最优传输的表征平衡方法，实现不依赖分布假设的因果效应估计。',
            date: '2024/5/2',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn12-2.png',
            paperUrl: 'https://openreview.net/pdf?id=GktjBAGgo4',
          },
          {
            title:
              'On the Identifiability of Poisson Branching Structural Causal Model Using Probability Generating Function',
            author: 'Yu Xiang, Jie Qiao, Zhefeng Liang, Zihuai Zeng, Ruichu Cai, Zhifeng Hao',
            abstract:
              'Causal discovery from observational data, especially for count data, is essential across scientific and industrial contexts, such as biology, economics, and network operation maintenance. For this task, most approaches model count data using Bayesian networks or ordinal relations. However, they overlook the inherent branching structures that are frequently encountered, e.g., a browsing event might trigger an adding cart or purchasing event. This can be modeled by a binomial thinning operator (for branching) and an additive independent Poisson distribution (for noising), known as Poisson Branching Structure Causal Model (PB-SCM). There is a provably sound cumulant-based causal discovery method that allows the identification of the causal structure under a branching structure. However, we show that there still remains a gap in that there exist causal directions that are identifiable while the algorithm fails to identify them. In this work, we address this gap by exploring the identifiability of PB-SCM using the Probability Generating Function (PGF). By developing a compact and exact closed-form solution for the PGF of PB-SCM, we demonstrate that each component in this closed-form solution uniquely encodes a specific local structure, enabling the identification of the local structures by testing their corresponding component appearances in the PGF. Building on this, we propose a practical algorithm for learning causal skeletons and identifying causal directions of PB-SCM using PGF. The effectiveness of our method is demonstrated through experiments on both synthetic and real datasets.',
            intro_cn:
              '针对传统计数数据方法可识别性受限的问题，提出了计数数据因果方向可识别性的充要条件和基于高阶累积量的因果结构方法，破解了计数数据的因果结构识别难题。',
            date: '2024/9/26',
            status: 'Accepted',
            status_color: 'primary',
            imgUrl: 'learn12-3.png',
            paperUrl:
              'https://proceedings.neurips.cc/paper_files/paper/2024/file/15aaa9224a35527d76188b4d40e02308-Paper-Conference.pdf',
          },
          {
            title: 'Long-Term Individual Causal Effect Estimation via Identifiable Latent Representation Learning',
            author: 'Ruichu Cai, Junjie Wan, Weilin Chen, Zeqin Yang, Zijian Li, Pena Zhen, Jiecheng Guo',
            abstract:
              'Estimating long-term causal effects by combining long-term observational and short-term experimental data is a crucial but challenging problem in many real-world scenarios. In existing methods, several ideal assumptions, e.g. latent unconfoundedness assumption or additive equi-confounding bias assumption, are proposed to address the latent confounder problem raised by the observational data. However, in real-world applications, these assumptions are typically violated which limits their practical effectiveness. In this paper, we tackle the problem of estimating the long-term individual causal effects without the aforementioned assumptions. Specifically, we propose to utilize the natural heterogeneity of data, such as data from multiple sources, to identify latent confounders, thereby significantly avoiding reliance on idealized assumptions. Practically, we devise a latent representation learning-based estimator of long-term causal effects. Theoretically, we establish the identifiability of latent confounders, with which we further achieve long-term effect identification. Extensive experimental studies, conducted on multiple synthetic and semi-synthetic datasets, demonstrate the effectiveness of our proposed method.',
            intro_cn:
              '针对长期异质因果效应估计中存在的隐混淆问题，提出了基于可识别因果表征学习的隐混淆恢复方法，实现长期异质效应估计。',
            date: '2025/4/28',
            status: 'Accepted',
            status_color: 'primary',
            imgUrl: 'learn12-4.png',
            paperUrl: 'https://arxiv.org/pdf/2505.05192',
          },
          {
            title: 'Structural Hawkes Processes for Learning Causal Structure from Discrete-Time Event Sequences',
            author: 'Jie Qiao, Ruichu Cai, Siyu Wu, Yu Xiang, Keli Zhang, Zhifeng Hao',
            abstract:
              'Learning causal structure among event types from discrete-time event sequences is a particularly important but challenging task. Existing methods, such as the multivariate Hawkes processes based methods, mostly boil down to learning the so-called Granger causality which assumes that the cause event happens strictly prior to its effect event. Such an assumption is often untenable beyond applications, especially when dealing with discrete-time event sequences in low-resolution; and typical discrete Hawkes processes mainly suffer from identifiability issues raised by the instantaneous effect, i.e., the causal relationship that occurred simultaneously due to the low-resolution data will not be captured by Granger causality. In this work, we propose Structure Hawkes Processes (SHPs) that leverage the instantaneous effect for learning the causal structure among events type in discrete-time event sequence. The proposed method is featured with the minorization-maximization of the likelihood function and a sparse optimization scheme. Theoretical results show that the instantaneous effect is a blessing rather than a curse, and the causal structure is identifiable under the existence of the instantaneous effect. Experiments on synthetic and real-world data verify the effectiveness of the proposed method.',
            intro_cn:
              '针对离散时间事件序列中因果结构学习受限于传统格兰杰因果假设的问题，提出了结构霍克斯过程模型，利用瞬时效应实现离散时间事件序列中的因果结构识别。',
            date: '2023/8/25',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn12-5.png',
            paperUrl: 'https://arxiv.org/pdf/2305.05986',
          },
          {
            title: 'Long-term Causal Effects Estimation via Latent Surrogates Representation Learning',
            author: 'Ruichu Cai, Weilin Chen, Zeqin Yang, Shu Wan, Chen Zheng, Xiaoqing Yang, Jiecheng Guo',
            abstract:
              'Estimating long-term causal effects based on short-term surrogates is a significant but challenging problem in many real-world applications, e.g., marketing and medicine. Despite its success in certain domains, most existing methods estimate causal effects in an idealistic and simplistic way - ignoring the causal structure among short-term outcomes and treating all of them as surrogates. However, such methods cannot be well applied to real-world scenarios, in which the partially observed surrogates are mixed with their proxies among short-term outcomes. To this end, we develop our flexible method, Laser, to estimate long-term causal effects in the more realistic situation that the surrogates are observed or have observed this http URL the indistinguishability between the surrogates and proxies, we utilize identifiable variational auto-encoder (iVAE) to recover the whole valid surrogates on all the surrogates candidates without the need of distinguishing the observed surrogates or the proxies of latent surrogates. With the help of the recovered surrogates, we further devise an unbiased estimation of long-term causal effects. Extensive experimental results on the real-world and semi-synthetic datasets demonstrate the effectiveness of our proposed method.',
            intro_cn:
              '针对长期因果效应估计中的短期高维变量因果结构未知且含隐变量的问题，提出了基于可识别因果表征的短期隐变量恢复理论用于长期效应估计。',
            date: '2024/4/23',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn12-6.png',
            paperUrl: 'https://arxiv.org/pdf/2208.04589',
          },
          {
            title: 'Exploiting Geometry for Treatment Effect Estimation via Optimal Transport',
            author: 'Yuguang Yan, Zeqin Yang, Weilin Chen, Ruichu Cai, Zhifeng Hao, Michael Kwok-Po Ng',
            abstract:
              'Estimating treatment effects from observational data suffers from the issue of confounding bias, which is induced by the imbalanced confounder distributions between the treated and control groups. As an effective approach, re-weighting learns a group of sample weights to balance the confounder distributions. Existing methods of re-weighting highly rely on a propensity score model or moment alignment. However, for complex real-world data, it is difficult to obtain an accurate propensity score prediction. Although moment alignment is free of learning a propensity score model, accurate estimation for high-order moments is computationally difficult and still remains an open challenge, and first and second-order moments are insufficient to align the distributions and easy to be misled by outliers. In this paper, we exploit geometry to capture the intrinsic structure involved in data for balancing the confounder distributions, so that confounding bias can be reduced even with outliers. To achieve this, we construct a connection between treatment effect estimation and optimal transport, a powerful tool to capture geometric information. After that, we propose an optimal transport model to learn sample weights by extracting geometry from confounders, in which geometric information between groups and within groups is leveraged for better confounder balancing. A projected mirror descent algorithm is employed to solve the derived optimization problem. Experimental studies on both synthetic and real-world datasets demonstrate the effectiveness of our proposed method.',
            intro_cn:
              '针对现有因果效应估计方法在复杂场景下协变量分布对齐困难、导致效应估计不准的问题，提出了基于最优传输理论的组间协变量对齐方法，实现因果效应的高精度估计。',
            date: '2024/3/24',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn12-7.png',
            paperUrl: 'https://ojs.aaai.org/index.php/AAAI/article/view/29564/30946',
            link: 'http://mp.weixin.qq.com/s?__biz=MzAwMDcxMDcyMw==&mid=2649696451&idx=1&sn=e2483c77dca25a678f495b8514266620&scene=19#wechat_redirect',
          },
          {
            title: 'StateHPs: State Hawkes processes for Granger causal discovery from non-stationary event sequences',
            author: 'Yuequn Liu, Guangdong Sun, Ruichu Cai, Zijian Li, Keli Zhang, Lujia Pan, Zhifeng Hao',
            abstract:
              'Learning Granger causality from event sequences has important applications in various scenarios. Many methods have been developed based on Hawkes process with a stationarity assumption. However, these methods often fail in real-world scenarios due to violating the stationarity assumption, as an event sequence can be generated under different states at varying times. Although some work tries to model non-stationarity by searching for best segmentation, they still suffer from the lack of robustness and identification guarantee. An intuitive solution is to model the non-stationary generation process in a unified probabilistic generative framework. This presents two significant challenges: how to model the generation process considering both the stationarity of each subsequence and the non-stationarity among the subsequences, and how to identify the Granger causality. To address these challenges, we devise State Hawkes Processes (StateHPs). For the first challenge, StateHPs formulates the state assignments of each subsequence as a Dirichlet distribution and each state as a Hawkes process. For the second challenge, StateHPs introduces a variational Expectation-Maximization algorithm to identify the Granger causal graph. We also develop the identification theories for StateHPs. On real-world data, StateHPs achieves 35.5%, 33.9%, and 36.7% improvement among F1, Precision, and Recall metrics compared to the SOTA baselines.',
            intro_cn:
              '针对现有基于霍克斯过程的格兰杰因果发现方法因假设平稳性而在非平稳事件序列中表现不佳的问题，提出了StateHPs模型，通过统一建模不同状态下的生成过程，实现非平稳事件序列中的格兰杰因果图准确识别。',
            date: '',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn12-8.png',
            paperUrl:
              'https://www.sciencedirect.com/science/article/pii/S0020025525005547?ref=pdf_download&fr=RR-2&rr=9969197c1c69dc0d',
          },
          {
            title:
              'Causal Discovery from Poisson Branching Structural Causal Model Using High-Order Cumulant with Path Analysis',
            author: 'Jie Qiao, Yu Xiang, Zhengming Chen, Ruichu Cai, Zhifeng Hao',
            abstract:
              'Count data naturally arise in many fields, such as finance, neuroscience, and epidemiology, and discovering causal structure among count data is a crucial task in various scientific and industrial scenarios. One of the most common characteristics of count data is the inherent branching structure described by a binomial thinning operator and an independent Poisson distribution that captures both branching and noise. For instance, in a population count scenario, mortality and immigration contribute to the count, where survival follows a Bernoulli distribution, and immigration follows a Poisson distribution. However, causal discovery from such data is challenging due to the non-identifiability issue: a single causal pair is Markov equivalent, i.e., X\rightarrow Y and Y\rightarrow X are distributed equivalent. Fortunately, in this work, we found that the causal order from X to its child Y is identifiable if X is a root vertex and has at least two directed paths to Y, or the ancestor of X with the most directed path to X has a directed path to Y without passing X. Specifically, we propose a Poisson Branching Structure Causal Model (PB-SCM) and perform a path analysis on PB-SCM using high-order cumulants. Theoretical results establish the connection between the path and cumulant and demonstrate that the path information can be obtained from the cumulant. With the path information, causal order is identifiable under some graphical conditions. A practical algorithm for learning causal structure under PB-SCM is proposed and the experiments demonstrate and verify the effectiveness of the proposed method.',
            intro_cn:
              '针对传统方法在计数数据上局部结构因果关系不可识别的问题，揭示了路径信息与高阶累积量之间的内在联系，提出了基于路径分析的计数数据因果结构学习方法。',
            date: '2024/3/24',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn12-9.png',
            paperUrl: 'https://arxiv.org/pdf/2403.16523',
          },
          {
            title:
              'TNPAR: Topological Neural Poisson Auto-Regressive Model for Learning Granger Causal Structure from Event Sequences',
            author: 'Yuequn Liu, Ruichu Cai, Wei Chen, Jie Qiao, Yuguang Yan, Zijian Li, Keli Zhang, Zhifeng Hao',
            abstract:
              'Learning Granger causality from event sequences is a challenging but essential task across various applications. Most existing methods rely on the assumption that event sequences are independent and identically distributed (i.i.d.). However, this i.i.d. assumption is often violated due to the inherent dependencies among the event sequences. Fortunately, in practice, we find these dependencies can be modeled by a topological network, suggesting a potential solution to the non-i.i.d. problem by introducing the prior topological network into Granger causal discovery. This observation prompts us to tackle two ensuing challenges: 1) how to model the event sequences while incorporating both the prior topological network and the latent Granger causal structure, and 2) how to learn the Granger causal structure. To this end, we devise a unified topological neural Poisson auto-regressive model with two processes. In the generation process, we employ a variant of the neural Poisson process to model the event sequences, considering influences from both the topological network and the Granger causal structure. In the inference process, we formulate an amortized inference algorithm to infer the latent Granger causal structure. We encapsulate these two processes within a unified likelihood function, providing an end-to-end framework for this task. Experiments on simulated and real-world data demonstrate the effectiveness of our approach.',
            intro_cn:
              '针对事件序列存在非独立同分布特性、导致传统格兰杰因果发现方法难以直接应用的问题，提出了拓扑神经泊松自回归模型TNPAR，实现事件序列生成过程与推理过程的一体化建模。',
            date: '2024/3/24',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn12-10.png',
            paperUrl: 'https://arxiv.org/pdf/2306.14114',
          },
        ],
        patents: [
          {
            title: '基于分布渐进迁移的因果推断模型调整方法',
            author: '闫玉光, 杨浩霖, 王江伦, 蔡瑞初',
            abstract: '',
            intro_cn: '提出了基于分布渐进迁移的因果推断模型调整方法，提高了因果效应估计的准确性。',
            date: '2025/10/29',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '广东工业大学',
            relatedResearchContent: '2.2',
          },
          {
            title: '一种基于最优传输的因果效应估计方法',
            author: '闫玉光, 周浩, 李豪嵘, 蔡瑞初',
            abstract: '',
            intro_cn: '提出了一种基于最优传输的因果效应估计方法，解决了混淆偏差导致因果估计不准的问题。',
            date: '2025/11/28',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '广东工业大学',
            relatedResearchContent: '2.2',
          },
          {
            title: '一种基于时序短期结果的长期营销定价因果推断方法及系统',
            author: '蔡瑞初, 朱佩湘, 陈伟霖, 梁泽丰, 乔杰, 许柏炎, 陈薇, 闫玉光, 郝志峰',
            abstract: '',
            intro_cn: '提出了基于时序混淆偏差的营销定价因果效应估计方法，解决了长期因果效应估计不准的问题。',
            date: '2025/09/02',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '广东工业大学',
            relatedResearchContent: '2.2',
          },
          {
            title: '一种基于因果图的代价最小必要因故障定位系统',
            author: '蔡瑞初, 陈浠, 刘跃群, 孙光冬, 陈薇, 陈炳丰',
            abstract: '',
            intro_cn: '实现了代价最小的网络故障检测根因分析。',
            date: '2024/08/02',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '广东工业大学',
            relatedResearchContent: '2.2',
          },
        ],
      },
    ],
  },
  {
    groupName: '课题二',
    output: [
      {
        researchDirection: '因果强化',
        papers: [
          {
            title: 'Learning by doing: an online causal reinforcement learning framework with causal-aware policy',
            author:
              'Ruichu Cai, Siyang Huang, Jie Qiao, Wei Chen, Yan Zeng, Keli Zhang, Fuchun Sun, Yang Yu, Zhifeng Hao',
            abstract:
              "As a key component to intuitive cognition and reasoning solutions in human intelligence, causal knowledge provides great potential for reinforcement learning (RL) agents' interpretability towards decision-making by helping reduce the searching space. However, there is still a considerable gap in discovering and incorporating causality into RL, which hinders the rapid development of causal RL. In this paper, we consider explicitly modeling the generation process of states with the causal graphical model, based on which we augment the policy. We formulate the causal structure updating into the RL interaction process with active intervention learning of the environment. To optimize the derived objective, we propose a framework with theoretical performance guarantees that alternates between two steps: using interventions for causal structure learning during exploration and using the learned causal structure for policy guidance during exploitation. Due to the lack of public benchmarks that allow direct intervention in the state space, we design the root cause localization task in our simulated fault alarm environment and then empirically show the effectiveness and robustness of the proposed method against state-of-the-art baselines. Theoretical analysis shows that our performance improvement attributes to the virtuous cycle of causal-guided policy learning and causal structure learning, which aligns with our experimental results. Codes are available at this https URL.",
            intro_cn:
              '针对传统强化学习存在决策空间庞大、采样效率低、泛化性与可解释性不足的问题，提出了一种融合环境因果结构、动作干预与奖励机制的在线因果强化学习框架，并给出了因果结构可识别性与策略收敛性的理论保证。',
            date: '2025/4/24',
            status: 'Accepted',
            status_color: 'primary',
            imgUrl: 'learn2-1.png',
            paperUrl: 'https://arxiv.org/pdf/2402.04869',
          },
          {
            title:
              'Causal-aware Large Language Models: Enhancing Decision-Making through Learning, Adapting and Acting',
            author: 'Wei Chen, Jiahao Zhang, Haipeng Zhu, Boyan Xu, Zhifeng Hao, Keli Zhang, Junjian Ye, Ruichu Cai',
            abstract:
              "Large language models (LLMs) have shown great potential in decision-making due to the vast amount of knowledge stored within the models. However, these pre-trained models are prone to lack reasoning abilities and are difficult to adapt to new environments, further hindering their application to complex real-world tasks. To address these challenges, inspired by the human cognitive process, we propose Causal-aware LLMs, which integrate the structural causal model (SCM) into the decision-making process to model, update, and utilize structured knowledge of the environment in a ``learning-adapting-acting' paradigm. Specifically, in the learning stage, we first utilize an LLM to extract the environment-specific causal entities and their causal relations to initialize a structured causal model of the environment. Subsequently,in the adapting stage, we update the structured causal model through external feedback about the environment, via an idea of causal intervention. Finally, in the acting stage, Causal-aware LLMs exploit structured causal knowledge for more efficient policy-making through the reinforcement learning agent. The above processes are performed iteratively to learn causal knowledge, ultimately enabling the causal-aware LLMs to achieve a more accurate understanding of the environment and make more efficient decisions. Experimental results across 22 diverse tasks within the open-world game ``Crafter' validate the effectiveness of our proposed method.",
            intro_cn:
              '针对大语言模型在复杂决策任务中推理能力不足、环境适应性差的问题，提出了融合结构因果模型的因果感知大语言模型框架，通过“学习—适应—行动”范式动态建模并更新环境因果知识，从而提升策略制定效率与决策准确性。',
            date: '2025/4/28',
            status: 'Accepted',
            status_color: 'primary',
            imgUrl: 'learn2-2.png',
            paperUrl: 'https://arxiv.org/pdf/2505.24710',
          },
          {
            title: 'UAV Collision Avoidance in Unknown Scenarios with Causal Representation Disentanglement',
            author:
              'Zhun Fan, Zihao Xia, Che Lin, Gaofei Han, Wenji Li, Dongliang Wang, Yindong Chen, Zhifeng Hao, Ruichu Cai, Jiafan Zhuang',
            abstract:
              'Deep reinforcement learning (DRL) has significantly advanced online path planning for unmanned aerial vehicles (UAVs). Nonetheless, DRL-based methods often encounter reduced performance when dealing with unfamiliar scenarios. This decline is mainly caused by the presence of non-causal and domain-specific elements within visual representations, which negatively impact the learning of policies. Present techniques generally depend on predefined augmentation or regularization methods intended to direct the model toward identifying causal and domain-invariant components, thereby enhancing the model’s ability to generalize. However, these manually crafted approaches are intrinsically constrained in their coverage and do not consider the entire spectrum of possible scenarios, resulting in less effective performance in new environments. Unlike prior studies, this work prioritizes representation learning and presents a novel method for causal representation disentanglement. The approach successfully distinguishes between causal and non-causal elements in visual data. By concentrating on causal aspects during the policy learning phase, the impact of non-causal factors is minimized, thereby improving the generalizability of DRL models. Experimental results demonstrate that our technique achieves reliable navigation and effective collision avoidance in unseen scenarios, surpassing state-of-the-art deep reinforcement learning algorithms.',
            intro_cn:
              '针对无人机在未知场景中视觉表征包含大量非因果因素、导致深度强化学习策略泛化能力不足的问题，提出了因果表征解耦方法，通过分离视觉中的因果与非因果成分来减少伪相关干扰，提升未知环境下的避障鲁棒性与泛化性能。',
            date: '2024/12/20',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn2-3.png',
            paperUrl: 'https://www.mdpi.com/2504-446X/9/1/10/pdf?version=1736230407',
          },
          {
            title:
              'Surrogate-assisted push and pull search for expensive constrained multi-objective optimization problems',
            author: 'Wenji Li, Ruitao Mai, Zhaojun Wang, Yifeng Qiu, Biao Xu, Zhifeng Hao, Zhun Fan',
            abstract:
              'In many real-world engineering optimizations, a large number of objective and constraint function values often need to be obtained through simulation software or physical experiments, which incurs significant computational costs and/or time expenses. These problems are known as expensive constraint multi-objective optimization problems (ECMOPs). This paper combines the push and pull search (PPS) framework and proposes a surrogate-assisted evolutionary algorithm to solve ECMOPs through Bayesian active learning, naming it the surrogate-assisted PPS (SA-PPS). Specifically, during the push search stage, candidate solutions are selected based on two indicators: hypervolume improvement and objective uncertainty. These aim to quickly guide the population towards the unconstrained Pareto front while ensuring diversity. During the pull search stage, the population is partitioned into many subregions through reference vectors, and different selection strategies are assigned to each subregion based on its state, aiming to guide the population towards the constrained Pareto front while ensuring diversity. Furthermore, we introduce a batch data selection strategy that utilizes Bayesian active learning to enable the surrogate model to focus on regions of interest in the pull search stage. Extensive experimental results have shown that the proposed SA-PPS algorithm exhibits superior convergence and diversity compared to 9 state-of-the-art algorithms across a variety of benchmark problems and a real-world optimization problem.',
            intro_cn:
              '针对昂贵约束多目标优化问题中目标评估代价高、约束处理困难的问题，提出了结合推拉搜索框架与代理模型的多目标优化方法。该方法通过贝叶斯主动学习、超体积改进和不确定性联合选择样本，在兼顾收敛性与多样性的同时显著降低真实评估成本。',
            date: '2024/9/2',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn2-4.png',
            paperUrl:
              'https://www.sciencedirect.com/science/article/pii/S2210650224002669?ref=pdf_download&fr=RR-2&rr=99691ff81c10dc0d',
          },
          {
            title: 'A lightweight encoder–decoder network for automatic pavement crack detection',
            author:
              'Guijie Zhu, Jiacheng Liu, Zhun Fan, Duan Yuan, Peili Ma, Meihua Wang, Weihua Sheng, Kelvin CP Wang',
            abstract:
              'Cracks are the most common damage type on the pavement surface. Usually, pavement cracks, especially small cracks, are difficult to be accurately identified due to background interference. Accurate and fast automatic road crack detection play a vital role in assessing pavement conditions. Thus, this paper proposes an efficient lightweight encoder–decoder network for automatically detecting pavement cracks at the pixel level. Taking advantage of a novel encoder–decoder architecture integrating a new type of hybrid attention blocks and residual blocks (RBs), the proposed network can achieve an extremely lightweight model with more accurate detection of pavement crack pixels. An image dataset consisting of 789 images of pavement cracks acquired by a self-designed mobile robot is built and utilized to train and evaluate the proposed network. Comprehensive experiments demonstrate that the proposed network performs better than the state-of-the-art methods on the self-built dataset as well as three other public datasets (CamCrack789, Crack500, CFD, and DeepCrack237), achieving F1 scores of 94.94%, 82.95%, 95.74%, and 92.51%, respectively. Additionally, ablation studies validate the effectiveness of integrating the RBs and the proposed hybrid attention mechanisms. By introducing depth-wise separable convolutions, an even more lightweight version of the proposed network is created, which has a comparable performance and achieves the fastest inference speed with a model parameter size of only 0.57 M. The developed mobile robot system can effectively detect pavement cracks in real scenarios at a speed of 25 frames per second.',
            intro_cn:
              '针对路面裂缝自动检测中模型计算复杂度高、难以在资源受限嵌入式设备上实时部署的挑战，提出了一种轻量级编码器—解码器网络RHACrackNet，在显著降低参数量和计算开销的同时实现了高精度、高速度的像素级裂缝检测。',
            date: '2023/8/18',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn2-5.png',
            paperUrl: 'https://onlinelibrary.wiley.com/doi/epdf/10.1111/mice.13103',
          },
          {
            title:
              'Automated pattern generation for swarm robots using constrained multi-objective genetic programming',
            author:
              'Zhun Fan, Zhaojun Wang, Wenji Li, Xiaomin Zhu, Bingliang Hu, An-Min Zou, Weidong Bao, Minqiang Gu, Zhifeng Hao, Yaochu Jin',
            abstract:
              'Swarm robotic systems (SRSs), which are widely used in many fields, such as search and rescue, usually comprise a number of robots with relatively simple mechanisms collaborating to accomplish complex tasks. A challenging task for SRSs is to design local interaction rules for self-organization of robots that can generate adaptive patterns to entrap moving targets. Biologically inspired approaches such as gene regulatory network (GRN) models provide a promising solution to this problem. However, the design of GRN models for generating entrapping patterns relies on the expertise of designers. As a result, the design of the GRN models is often a laborious and tedious trial-and-error process. In this study, we propose a modular design automation framework for GRN models that can generate entrapping patterns. The framework employs basic network motifs to construct GRN models automatically without requiring expertise. To this end, a constrained multi-objective genetic programming is utilized to simultaneously optimize the structures and parameters of the GRN models. A multi-criteria decision-making approach is adopted to choose the preferred GRN model for generating the entrapping pattern. Comprehensive simulation results demonstrate that the proposed framework can obtain novel GRN models with simpler structures than those designed by human experts yet better performance in complex and dynamic environments. Proof-of-concept experiments using e-puck robots confirmed the feasibility and effectiveness of the proposed GRN models.',
            intro_cn:
              '针对群体机器人围捕图案设计依赖专家经验、结构与参数协同优化困难的问题，提出了基于约束多目标遗传规划的自动化图案生成方法。该方法利用基本网络模体自动构建基因调控网络，并通过多目标优化同时搜索结构与参数，实现复杂动态环境下更高效的群体围捕。',
            date: '2023/8/1',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn2-6.png',
            paperUrl:
              'https://www.sciencedirect.com/science/article/pii/S2210650223001104?ref=cra_js_challenge&fr=RR-1',
          },
          {
            title: 'VG-Swarm: A Vision-Based Gene Regulation Network for UAVs Swarm Behavior Emergence',
            author:
              'Huanlin Li, Yuwei Cai, Juncao Hong, Peng Xu, Hui Cheng, Xiaomin Zhu, Bingliang Hu, Zhifeng Hao, Zhun Fan',
            abstract:
              'Unmanned Aerial Vehicles (UAVs) dynamic encirclement is an emerging field with great potential. Researchers often get inspiration from biological systems, either from macro-world like fish schools or bird flocks etc, or from micro-world like gene regulatory networks (GRN). However, most swarm control algorithms rely on centralized control, global information acquisition, and communications among neighboring agents. In this work, we propose a distributed swarm control method based purely on vision and GRN without any direct communications, in which swarm agents of e.g. UAVs can generate an entrapping pattern to encircle an escaping target of UAV based purely on their installed omnidirectional vision sensors. A finite-state-machine (FSM) describing the behavioral model of each drone is also designed so that a swarm of drones can accomplish searching and entrapping of the target collectively in an integrated way. We verify the effectiveness and efficiency of the proposed method in various simulation and real-world experiments.',
            intro_cn:
              '针对无人机集群动态围捕任务对集中式控制和全局通信依赖较强的问题，提出了一种基于视觉感知与基因调控网络的分布式群体控制方法。该方法仅依赖机载全向视觉与有限状态机行为建模，即可实现无人机群体的搜索、围捕与协同模式涌现。',
            date: '2023/1/12',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn2-7.png',
            paperUrl: 'https://arxiv.org/pdf/2206.08669',
          },
          {
            title: 'SUNDER: Self-organized grouping and entrapping method for swarms in multitarget environments',
            author: 'Yutong Yuan, Zhun Fan, Xiaomin Zhu, Li Ma, Ji Ouyang, Weidong Bao, Ji Wang, Zhaojun Wang',
            abstract:
              'For swarm robots moving in a harsh or uncharted outdoor environment without GPS guidance and global communication, algorithms that rely on global-based information are infeasible. Typically, traditional gene regulatory networks (GRNs) that achieve superior performance in forming trapping pattern towards targets require accurate global positional information to guide swarm robots. This article presents a gene regulatory network with Self-organized grouping and entrapping method for swarms (SUNDER-GRN) to achieve adequate trapping performance with a large-scale swarm in a confined multitarget environment with access to only local information. A hierarchical self-organized grouping method (HSG) is proposed to structure subswarms in a distributed way. In addition, a modified distributed controller, with a relative coordinate system that is established to relieve the need for global information, is leveraged to facilitate subswarms entrapment toward different targets, thus improving the global multi-target entrapping performance. The results demonstrate the superiority of SUNDER-GRN in the performance of structuring subswarms and entrapping 10 targets with 200 robots in an environment confined by obstacles and with only local information accessible.',
            intro_cn:
              '针对多目标环境中大规模机器人群体在缺乏GPS与全局通信条件下难以完成协同围捕的问题，提出了自组织分组与围捕方法SUNDER。该方法通过分层自组织分组和相对坐标控制机制，仅依赖局部信息即可实现多子群对多个目标的高效围捕。',
            date: '2023/8/1',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn2-8.png',
            paperUrl: 'https://www.sciencedirect.com/science/article/pii/S221491472300137X',
          },
          {
            title: 'Robust Policy Learning for Multi-UAV Collision Avoidance with Causal Feature Selection',
            author:
              'Jiafan Zhuang, Gaofei Han, Zihao Xia, Che Lin, Boxi Wang, Wenji Li, Dongliang Wang, Zhifeng Hao, Ruichu Cai, Zhun Fan',
            abstract:
              'In unseen and complex outdoor environments, collision avoidance navigation for unmanned aerial vehicle (UAV) swarms presents a challenging problem. It requires UAVs to navigate through various obstacles and complex backgrounds. Existing collision avoidance navigation methods based on deep reinforcement learning show promising performance but suffer from poor generalization abilities, resulting in performance degradation in unseen environments. To address this issue, we investigate the cause of weak generalization ability in DRL and propose a novel causal feature selection module. This module can be integrated into the policy network and effectively filters out non-causal factors in representations, thereby reducing the influence of spurious correlations between non-causal factors and action predictions. Experimental results demonstrate that our proposed method can achieve robust navigation performance and effective collision avoidance especially in scenarios with unseen backgrounds and obstacles, which significantly outperforms existing state-of-the-art algorithms.',
            intro_cn:
              '针对深度强化学习在未知场景中泛化能力不足的问题，提出了基于因果特征选择的多无人机避撞稳健策略学习方法，从视觉表征中识别并过滤非因果因素，减少虚假相关对策略学习的影响。',
            date: '2024/12/20',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn2-9.png',
            paperUrl: 'https://arxiv.org/pdf/2407.04056',
          },
        ],
        patents: [
          {
            title: '一种基于因果表征学习的磁芯损耗预测方法',
            author: '蔡瑞初, 陈浠, 彭琳钧, 张家豪, 陈薇, 陈炳丰',
            abstract: '',
            intro_cn:
              '提出了一种基于因果表征学习的磁芯损耗预测方法，通过分离与损耗机理相关的稳定因果因素和环境扰动因素，提高复杂工况下磁芯损耗预测的精度、稳健性与跨场景泛化能力。',
            date: '',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '',
            patentee: '',
            relatedResearchContent: '',
          },
          {
            title: '动态环境下基于因果强化学习的序列决策方法、系统、设备及存储介质',
            author: '蔡瑞初, 林富艺, 陈薇, 朱海鹏',
            abstract: '',
            intro_cn:
              '提出了动态环境下基于因果强化学习的序列决策方法，通过显式建模状态生成机制与动作干预影响，提升动态场景中的决策质量、样本效率与策略泛化能力。',
            date: '',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '',
            patentee: '',
            relatedResearchContent: '',
          },
          {
            title: '一种基于因果反事实的带延迟反馈上下文老虎机推荐方法',
            author: '蔡瑞初, 卢汝铭, 陈薇, 郝志峰',
            abstract: '',
            intro_cn:
              '提出了一种基于因果反事实的带延迟反馈上下文老虎机推荐方法，通过对延迟反馈下的数据生成过程进行因果建模并估计反事实奖励，缓解选择偏差问题，提升在线推荐策略的稳定性与效果。',
            date: '',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '',
            patentee: '',
            relatedResearchContent: '',
          },
          {
            title: '结合因果模型和深度强化学习的多智能体避障方法及系统',
            author: '于沂渭, 范衠, 王顺鸽, 王诏君, 李文姬, 魏沛蔚, 翟昊, 郝志峰',
            abstract: '',
            intro_cn:
              '提出了一种结合因果模型和深度强化学习的多智能体避障方法及系统，解决了传统视觉导航泛化性差的难题。',
            date: '2023/08/11',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '汕头大学',
            relatedResearchContent: '3.1, 3.2',
          },
          {
            title: '基于CFS的多无人机避障方法、系统、装置及介质',
            author: '庄嘉帆, 韩高飞, 夏子皓, 林澈, 李文姬, 范衠, 郝志峰',
            abstract: '',
            intro_cn: '提出了基于因果特征选择的多无人机避障方法，实现了多无人机系统在未知复杂环境下的自主避障与导航。',
            date: '2024/06/05',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '汕头大学',
            relatedResearchContent: '3.1, 3.2',
          },
          {
            title: '基于因果表征学习的无人机集群围捕控制方法及系统',
            author: '李文姬, 王博禧, 庄嘉帆, 王诏君, 王栋梁, 郝志峰, 范衠',
            abstract: '',
            intro_cn:
              '提出了基于因果表征学习的无人机集群围捕控制方法及系统，实现了多无人机在未知动态环境中的协同围捕，提升了多无人机系统的泛化能力。',
            date: '2024/10/18',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '汕头大学',
            relatedResearchContent: '3.1, 3.2',
          },
          {
            title: '因果经验回放的多智能体控制方法、装置、设备及介质',
            author: '李文姬, 黄大为, 王博禧, 王诏君, 庄嘉帆, 王栋梁, 郝志峰, 范衠',
            abstract: '',
            intro_cn:
              '提出了因果经验回放的多智能体控制方法、装置、设备及介质，实现了多智能体系统决策质量、样本效率和泛化能力的提升。',
            date: '2024/12/20',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '汕头大学',
            relatedResearchContent: '3.1, 3.2',
          },
          {
            title: '基于因果大语言模型的强化学习决策优化方法、系统及设备',
            author: '',
            abstract: '',
            intro_cn:
              '提出了一种基于因果大语言模型的强化学习决策优化方法，显著增强了强化学习在动态环境中的适应性、样本效率与推理能力。',
            date: '2025/07/09',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '广东工业大学',
            relatedResearchContent: '3.1, 3.2',
          },
        ],
      },
      {
        researchDirection: '因果迁移',
        papers: [
          {
            title: 'Efficient Focus Autoencoders for Fast Autonomous Flight in Intricate Wild Scenarios',
            author: 'Kaiyu Hu, Huanlin Li, Jiafan Zhuang, Zhifeng Hao, Zhun Fan',
            abstract:
              'The autonomous navigation of aerial robots in unknown and complex outdoor environments is a challenging problem that typically requires planners to generate collision-free trajectories based on human expert rules for fast navigation. Presently, aerial robots suffer from high latency in acquiring environmental information, which limits the control strategies that the vehicle can implement. In this study, we proposed the SAC_FAE algorithm for high-speed navigation in complex environments using deep reinforcement learning (DRL) policies. Our approach consisted of a soft actor–critic (SAC) algorithm and a focus autoencoder (FAE). Our end-to-end DRL navigation policy enabled a flying robot to efficiently accomplish navigation tasks without prior map information by relying solely on the front-end depth frames and its own pose information. The proposed algorithm outperformed existing trajectory-based optimization approaches at flight speeds exceeding 3 m/s in multiple testing environments, which demonstrates its effectiveness and efficiency.',
            intro_cn:
              '针对复杂野外场景下无人机高速自主飞行存在环境感知延迟高、控制策略受限的问题，提出了结合软演员—评论家算法与聚焦自编码器的端到端飞行方法。该方法仅依赖前端深度图和位姿信息即可实现快速导航，在未知环境中表现出更高的效率与稳定性。',
            date: '2023/9/27',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn22-1.png',
            paperUrl: 'https://www.mdpi.com/2504-446X/7/10/609',
          },
          {
            title: 'Transferable Time-Series Forecasting under Causal Conditional Shift',
            author: 'Zijian Li, Ruichu Cai, Tom Z. J. Fu, Zhifeng Hao, Kun Zhang',
            abstract:
              'This paper focuses on the problem of semi-supervised domain adaptation for time-series forecasting, which is underexplored in literatures, despite being often encountered in practice. Existing methods on time-series domain adaptation mainly follow the paradigm designed for the static data, which cannot handle domain-specific complex conditional dependencies raised by data offset, time lags, and variant data distributions. In order to address these challenges, we analyze variational conditional dependencies in time-series data and find that the causal structures are usually stable among domains, and further raise the causal conditional shift assumption. Enlightened by this assumption, we consider the causal generation process for time-series data and propose an end-to-end model for the semi-supervised domain adaptation problem on time-series forecasting. Our method can not only discover the Granger-Causal structures among cross-domain data but also address the cross-domain time-series forecasting problem with accurate and interpretable predicted results. We further theoretically analyze the superiority of the proposed method, where the generalization error on the target domain is bounded by the empirical risks and by the discrepancy between the causal structures from different domains. Experimental results on both synthetic and real data demonstrate the effectiveness of our method for the semi-supervised domain adaptation method on time-series forecasting.',
            intro_cn:
              '针对时间序列预测中的跨域条件分布变化与复杂时滞依赖问题，提出了基于因果条件偏移假设的可迁移时间序列预测方法，通过学习跨域稳定的Granger因果结构提升目标域预测精度与可解释性。',
            date: '2023/8/11',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn22-2.png',
            paperUrl: 'https://arxiv.org/pdf/2111.03422',
            link: 'http://mp.weixin.qq.com/s?__biz=MzAwMDcxMDcyMw==&mid=2649695678&idx=1&sn=6143754e7f0fd914a04f8e153539ce12&scene=19#wechat_redirect',
          },
          {
            title: 'Subspace Identification for Multi-Source Domain Adaptation',
            author: 'Zijian Li, Ruichu Cai, Guangyi Chen, Boyang Sun, Zhifeng Hao, Kun Zhang',
            abstract:
              'Multi-source domain adaptation (MSDA) methods aim to transfer knowledge from multiple labeled source domains to an unlabeled target domain. Although current methods achieve target joint distribution identifiability by enforcing minimal changes across domains, they often necessitate stringent conditions, such as an adequate number of domains, monotonic transformation of latent variables, and invariant label distributions. These requirements are challenging to satisfy in real-world applications. To mitigate the need for these strict assumptions, we propose a subspace identification theory that guarantees the disentanglement of domain-invariant and domain-specific variables under less restrictive constraints regarding domain numbers and transformation properties, thereby facilitating domain adaptation by minimizing the impact of domain shifts on invariant variables. Based on this theory, we develop a Subspace Identification Guarantee (SIG) model that leverages variational inference. Furthermore, the SIG model incorporates class-aware conditional alignment to accommodate target shifts where label distributions change with the domains. Experimental results demonstrate that our SIG model outperforms existing MSDA techniques on various benchmark datasets, highlighting its effectiveness in real-world applications.',
            intro_cn:
              '针对现有多源域自适应方法依赖严格假设导致泛化性受限的问题，提出了基于子空间识别的因果机器学习泛化性理论。',
            date: '2023/9/22',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn22-3.png',
            paperUrl: 'https://arxiv.org/pdf/2310.04723',
          },
          {
            title:
              'Where and How to Attack? A Causality-Inspired Recipe for Generating Counterfactual Adversarial Examples',
            author: 'Ruichu Cai, Yuxuan Zhu, Jie Qiao, Zefeng Liang, Furui Liu, Zhifeng Hao',
            abstract:
              "Deep neural networks (DNNs) have been demonstrated to be vulnerable to well-crafted emph{adversarial examples}, which are generated through either well-conceived mathcal{L}_p-norm restricted or unrestricted attacks. Nevertheless, the majority of those approaches assume that adversaries can modify any features as they wish, and neglect the causal generating process of the data, which is unreasonable and unpractical. For instance, a modification in income would inevitably impact features like the debt-to-income ratio within a banking system. By considering the underappreciated causal generating process, first, we pinpoint the source of the vulnerability of DNNs via the lens of causality, then give theoretical results to answer emph{where to attack}. Second, considering the consequences of the attack interventions on the current state of the examples to generate more realistic adversarial examples, we propose CADE, a framework that can generate \textbf{C}ounterfactual \textbf{AD}versarial \textbf{E}xamples to answer emph{how to attack}. The empirical results demonstrate CADE's effectiveness, as evidenced by its competitive performance across diverse attack scenarios, including white-box, transfer-based, and random intervention attacks.",
            intro_cn:
              '针对对抗攻击方法忽视数据因果生成过程、攻击缺乏针对性的问题，提出了融合因果推理与反事实干预的对抗样本生成框架。',
            date: '2024/3/24',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn22-4.png',
            paperUrl: 'https://arxiv.org/pdf/2312.13628',
            link: 'http://mp.weixin.qq.com/s?__biz=MzAwMDcxMDcyMw==&mid=2649696386&idx=1&sn=f39dd2e0b38d6ffa1570bcf1a65935c5&scene=19#wechat_redirect',
          },
          {
            title: 'Learning Disentangled Representation for Multi-Modal Time-Series Sensing Signals',
            author:
              'Ruichu Cai, Zhifan Jiang, Kaitao Zheng, Zijian Li, Weilin Chen, Xuexin Chen, Yifan Shen, Guangyi Chen, Zhifeng Hao, Kun Zhang',
            abstract:
              'Existing methods for multi-modal time series representation learning aim to disentangle the modality-shared and modality-specific latent variables. Although achieving notable performances on downstream tasks, they usually assume an orthogonal latent space. However, the modality-specific and modality-shared latent variables might be dependent on real-world scenarios. Therefore, we propose a general generation process, where the modality-shared and modality-specific latent variables are dependent, and further develop a \textbf{M}ulti-mod\textbf{A}l \textbf{TE}mporal Disentanglement (\textbf{MATE}) model. Specifically, our \textbf{MATE} model is built on a temporally variational inference architecture with the modality-shared and modality-specific prior networks for the disentanglement of latent variables. Furthermore, we establish identifiability results to show that the extracted representation is disentangled. More specifically, we first achieve the subspace identifiability for modality-shared and modality-specific latent variables by leveraging the pairing of multi-modal data. Then we establish the component-wise identifiability of modality-specific latent variables by employing sufficient changes of historical latent variables. Extensive experimental studies on multi-modal sensors, human activity recognition, and healthcare datasets show a general improvement in different downstream tasks, highlighting the effectiveness of our method in real-world scenarios.',
            intro_cn:
              '针对跨媒体数据传统方法假设过强的问题，提出了因果表征学习的可识别性理论，实现隐因果表征的完全解耦，破解了跨媒体数据的因果表征学习难题。',
            date: '2025/1/20',
            status: 'Accepted',
            status_color: 'primary',
            imgUrl: 'learn22-5.png',
            paperUrl: 'https://arxiv.org/pdf/2405.16083',
          },
          {
            title: '基于路径签名的时间序列领域自适应方法',
            author: '蔡瑞初,颜嘉文, 陈道鑫, 李梓健,郝志峰',
            abstract:
              '近年来深度学习因其在各个场景下的优异性能而受到越来越多研究者的重视，但是这些方法通常依赖独立同分布假设。领域自适应则是为了缓解分布偏移带来的影响而提出的问题，它利用了带标签的源域数据和不带标签的目标域数据能够训练得到在目标域数据上性能较好的模型。现有的领域自适应方法大多针对静态数据，而时间序列数据的方法需要捕捉变量之间的依赖关系。现有的方法虽然采用了针对时间序列数据的特征提取器，例如递归神经网络，以学习变量间的依赖关系，但是往往将冗余的信息也一同提取。这些冗余信息容易和语义信息耦合，进而影响模型的预测性能。基于上述问题，本文提出了一种基于路径签名的时间序列领域自适应方法 (Path-Signature-based Time-Series Domain Adaptation, PSDA)。该方法一方面利用了路径签名变换来捕捉变量间的稀疏依赖关系，排除冗余相关关系的同时保留了语义相关关系，从而有利于提取时序数据中具有判别力的特征；另一方面通过约束源域和目标域之间的依赖关系一致性来保留领域之间不变的依赖关系，排除领域变化的依赖关系，从而有利于提取时序数据中具有泛化性的特征。基于以上方法，本文进一步提出了一个距离度量标准和泛化性边界理论，并且在多个时间序列领域自适应标准数据集上获得了最好的实验效果。',
            intro_cn:
              '针对时间序列领域自适应中现有方法易提取冗余信息、难以捕捉变量间稀疏依赖关系且协变量偏移假设不适用的问题，提出了基于路径签名的时间序列领域自适应方法，通过路径签名变换刻画变量间稀疏依赖并约束跨域依赖一致性，以提升时序特征的判别性与泛化性。',
            date: '2024/7/4',
            status: 'Published',
            status_color: 'success',
            imgUrl: 'learn22-6.png',
            paperUrl: 'https://jos.org.cn/jos/article/abstract/nf043',
          },
        ],
        patents: [
          {
            title: '基于因果解耦的道路裂缝检测方法、电子设备及存储介质',
            author: '庄嘉帆, 伍庆玲, 严日鸿, 朱贵杰, 李文姬, 范衠',
            abstract: '',
            intro_cn:
              '提出了基于因果解耦的道路裂缝检测方法，实现了未知环境下道路裂缝检测的准确性、鲁棒性与跨域泛化能力的提升。',
            date: '2024/09/29',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '汕头大学',
            relatedResearchContent: '4.1, 4.2',
          },
          {
            title: '一种视频语义分割网络的半监督训练方法、设备及介质',
            author: '',
            abstract: '',
            intro_cn: '提出一种面向视频语义分割的半监督学习方法，提升了模型在未标注视频数据上的泛化能力。',
            date: '2024/05/30',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
            patentType: '中国专利',
            patentee: '汕头大学',
            relatedResearchContent: '4.1',
          },
        ],
      },
    ],
  },
];
